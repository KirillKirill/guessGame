class GuessingGame {
    constructor() {
        this.left = null;
        this.right = null;
        this.mid = null;
    }

    setRange(min, max) {
        this.left = min;
        this.right = max;
        return this;
    }

    guess() {
        this.mid =  Math.round((this.left + this.right) / 2);
        return this.mid;
    }

    lower() {
        this.right = this.mid;
    }

    greater() {
        this.left = this.mid;
    }
}

module.exports = GuessingGame;
