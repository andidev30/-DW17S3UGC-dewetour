const {
  Transaction,
  Trip,
  Country,
  User
} = require("../models");
const joi = require("@hapi/joi");

exports.store = async (req, res) => {
  try {
    const schema = joi.object({
      counterQty: joi.number().integer().required(),
      total: joi.number().integer().required(),
      status: joi.string().min(4).required(),
      attachment: joi.string().min(1).required(),
      tripid: joi.number().integer().required(),
    });

    const {
      error
    } = schema.validate(req.body);

    if (error)
      return res.status(400).send({
        error: {
          message: error.details[0].message,
        },
      });

    const id = req.user.id;
    const {
      counterQty,
      total,
      status,
      attachment,
      tripid
    } = req.body;

    const data = await Transaction.create({
      counterQty,
      total,
      status,
      attachment,
      tripid,
      userId: id,
    });

    if (data) {
      const result = await Transaction.findOne({
        where: {
          id: data.id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "tripid"],
        },
        include: {
          model: Trip,
          as: "Trip",
          attributes: {
            exclude: ["createdAt", "updatedAt", "countryId"],
          },
          include: {
            model: Country,
            as: "Country",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        },
      });

      res.status(200).send({
        message: "data has been stored",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).send({
      error: {
        message: "Internal server error",
        log: error.message,
      },
    });
  }
};

exports.update = async (req, res) => {
  try {
    const schema = joi.object({
      counterQty: joi.number().integer().required(),
      total: joi.number().integer().required(),
      status: joi.string().min(4).required(),
      attachment: joi.string().min(4).required(),
      tripid: joi.number().integer().required(),
    });

    const {
      error
    } = schema.validate(req.body);

    if (error)
      return res.status(400).send({
        error: {
          message: error.details[0].message,
        },
      });

    const {
      id
    } = req.params;

    const data = await Transaction.update(req.body, {
      where: {
        id,
      },
    });

    if (data) {
      const result = await Transaction.findOne({
        where: {
          id: id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "tripid"],
        },
        include: {
          model: Trip,
          as: "Trip",
          attributes: {
            exclude: ["createdAt", "updatedAt", "countryId"],
          },
          include: {
            model: Country,
            as: "Country",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        },
      });

      if (!result)
        return res.status(400).send({
          error: {
            message: "data has been updated",
          },
        });

      res.status(200).send({
        message: "response success",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).send({
      error: {
        message: "Internal server error",
        log: error.message,
      },
    });
  }
};

exports.show = async (req, res) => {
  try {
    const {
      id
    } = req.params;

    const result = await Transaction.findOne({
      where: {
        id: id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "tripid", "userId"],
      },
      include: [{
          model: Trip,
          as: "Trip",
          attributes: {
            exclude: ["createdAt", "updatedAt", "countryId"],
          },
          include: {
            model: Country,
            as: "Country",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        },
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
      ],
    });

    if (!result)
      return res.status(400).send({
        error: {
          message: "can't read. id is incorect",
        },
      });

    res.status(200).send({
      message: "response success",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      error: {
        message: "Internal server error",
        log: error.message,
      },
    });
  }
};

exports.shows = async (req, res) => {
  try {
    const result = await Transaction.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "tripid", "userId"],
      },
      include: [{
          model: Trip,
          as: "Trip",
          attributes: {
            exclude: ["createdAt", "updatedAt", "countryId"],
          },
          include: {
            model: Country,
            as: "Country",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        },
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
      ],
    });

    res.status(200).send({
      message: "response success",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      error: {
        message: "Internal server error",
        log: error.message,
      },
    });
  }
};

exports.showByUser = async (req, res) => {
  try {
    const {
      id
    } = req.user;

    const data = await Transaction.findAll({
      where: {
        userId: id,
      },
      include: [{
          model: Trip,
          as: "Trip",
          attributes: {
            exclude: ["createdAt", "updatedAt", "countryId"],
          },
          include: {
            model: Country,
            as: "Country",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        },
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
      ],
      attributes: {
        exclude: ["updatedAt", "password"],
      },
    });

    res.status(200).send({
      message: "response success",
      data,
    });
  } catch (error) {
    res.status(500).send({
      error: {
        message: "Internal server error",
        log: error.message,
      },
    });
  }
};

exports.uploadStruk = async (req, res) => {
  try {
    const {
      id
    } = req.params
    const image = "http://localhost:3008/" + req.file.path

    const result = await Transaction.update({
      attachment: image,
      status: "waiting approve"
    }, {
      where: {
        id
      }
    })

    if (result) {
      const data = await Transaction.findOne({
        where: {
          id
        },
        attributes: ['attachment']
      })

      res.status(200).send({
        message: "data has been updated",
        data: data
      })
    }
  } catch (error) {
    res.status(500).send({
      error: {
        message: "Internal server error",
        log: error.message
      }
    })
  }
}