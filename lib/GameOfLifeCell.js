var AbstractComponent = require('kevoree-entities').AbstractComponent;

/**
 * Kevoree component
 * @type {GameOfLifeCell}
 */
var GameOfLifeCell = AbstractComponent.extend({
    toString: 'GameOfLifeCell',

    /* This is an example of dictionary attribute that you can set for your entity */
    dic_x: {
        optional: true,
        defaultValue: 0,
    },
    dic_y: {
        optional: true,
        defaultValue: 0,
    },

    /**
     * this method will be called by the Kevoree platform when your component has to start
     * @param {Function} done
     */
    start: function (done) {
        this.log.debug(this.toString(), 'START');
        var x = this.dictionary.getNumber('x', 0);
        var y = this.dictionary.getNumber('y', 0);
        this.log.debug(this.toString(), x + ' : ' + y);
        done();
    },

    /**
     * this method will be called by the Kevoree platform when your component has to stop
     * @param {Function} done
     */
    stop: function (done) {
        this.log.debug(this.toString(), 'STOP');
        done();
    }

});

module.exports = GameOfLifeCell;
