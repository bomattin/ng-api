"use strict";

// Field names are commented out until https://github.com/sequelize/sequelize/issues/4600 is resolved.
// Current db is just using property names (which I hate, but sequelize has its ways...)

module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
        id: {
            type: DataTypes.INTEGER,
            //field: "event_id",
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING(50),
            //field: "group_id",
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(80),
            //field: "start_date",
            allowNull: false
        }
    }, {

    });

    return Student;
};