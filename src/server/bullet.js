const shortid = require('shortid');
const DynamicEntity = require('./entity');
const Constants = require('../shared/constants');

class Bullet extends DynamicEntity {
    constructor(parentID, x, y, dir) {
        super(shortid(), x, y, dir, Constants.BULLET_SPEED);
        this.parentID = parentID;
    }

    update(dt) {
        super.update(dt);
        return this.x < 0 || this.x > Constants.MAP_SIZE || this.y < 0 || this.y > Constants.MAP_SIZE;
    }
}

module.exports = Bullet;