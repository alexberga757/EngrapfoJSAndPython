const mparse = require('./stringparse');
const Exc = require('./EngrapfoExcept');
const fs = require('fs');

class Load {
  constructor(value) {
    this.arr = value.split('\n');
  }

  getValue(name) {
    const arr_ = this.arr;
    let token = "";

    for (const line of arr_) {
      const n = line.split(":");

      if (mparse.removeFirstSpace(n[0]) === name) {
        for (let i = 1; i < n.length; i++) {
          token += `:${n[i]}`;
        }
        break;
      }
    }

    if (token === "") {
      return null;
    } else {
      return mparse.removeFirstCharacter(token);
    }
  }

  toArrays(name) {
    return mparse.toArrays(this.getValue(name));
  }

  withEsc(name) {
    return mparse.replaceOneEscapeChar(this.getValue(name));
  }

  exists(name) {
    const arr_ = this.arr;
    let readyExist = false;

    for (const line of arr_) {
      const n = line.split(":");
      if (mparse.removeFirstSpace(n[0]) === name) {
        readyExist = true;
        break;
      }
    }

    return readyExist;
  }

  push(name, value) {
    const arr_ = this.arr;
    if (this.exists(name)) {
      throw new Exc.Comms("This value already exists");
    } else {
      arr_.push(`${name}:${value}`);
    }
  }

  remove(name) {
    const arr_ = this.arr;
    const newArr = [];

    if (this.exists(name)) {
      for (const line of arr_) {
        const n = line.split(":");
        if (mparse.removeFirstSpace(n[0]) !== name) {
          newArr.push(line);
        }
      }
    } else {
      throw new Exc.Comms("This value does not exist");
    }

    this.arr = newArr;
  }

  list() {
    const arr_ = this.arr;
    const lstnm = [];

    for (const line of arr_) {
      const n = line.split(':');
      lstnm.push(mparse.removeFirstSpace(n[0]));
    }

    return lstnm;
  }

  change(value) {
    this.arr = value.split('\n');
  }

  reget() {
    let token = "";
    let state = 0;
    const arr_ = this.arr;

    for (const i of arr_) {
      state = 1 + state;

      if (state === 1) {
        token += i;
      } else {
        token += `\n${i}`;
      }
    }

    return token;
  }

  autoWrite(path) {
    fs.writeFileSync(path, this.reget());
  }
}

module.exports = {
  Load: Load
};

