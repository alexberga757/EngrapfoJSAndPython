function removeFirstSpace(value) {
  let state = 0;
  let token = "";

  for (let i = 0; i < value.length; i++) {
    const chrs = value[i];

    if (chrs === " " || chrs === "\t") {
      if (state === 0) {
        // Do nothing
      } else if (state === 1) {
        token += chrs;
      }
    } else {
      token += chrs;
      state = 1;
    }
  }

  return token;
}

function removeFirstCharacter(value) {
  let state = 0;
  let token = "";

  for (let i = 0; i < value.length; i++) {
    const chrs = value[i];
    state = state + 1;

    if (state === 1) {
      // Do nothing
    } else {
      token += chrs;
    }
  }

  return token;
}

function toArray(value) {
  const result = [];
  let currentElement = "";
  let escapeNext = false;

  for (let i = 0; i < value.length; i++) {
    const char = value[i];

    if (escapeNext) {
      currentElement += char;
      escapeNext = false;
    } else if (char === "\\") {
      escapeNext = true;
    } else if (char === ",") {
      result.push(currentElement);
      currentElement = "";
    } else {
      currentElement += char;
    }
  }

  result.push(currentElement); // Add the last element

  return result;
}

function replaceOneEscapeChar(value) {
  let token = "";
  let state = 0;

  for (let i = 0; i < value.length; i++) {
    const char = value[i];

    if (char === "\\") {
      if (state === 0) {
        state = 1;
      } else if (state === 1) {
        token += "\\";
        state = 0;
      }
    } else if (char === "n") {
      if (state === 1) {
        token += "\n";
        state = 0;
      } else if (state === 0) {
        token += char;
      }
    } else if (char === "b") {
      if (state === 1) {
        token += "\b";
        state = 0;
      } else if (state === 0) {
        token += char;
      }
    } else if (char === "t") {
      if (state === 1) {
        token += "\t";
        state = 0;
      } else if (state === 0) {
        token += char;
      }
    } else if (char === "f") {
      if (state === 1) {
        token += "\f";
        state = 0;
      } else if (state === 0) {
        token += char;
      }
    } else {
      token += char;
      state = 0;
    }
  }

  return token;
}

module.exports = {
  removeFirstSpace,
  removeFirstCharacter,
  toArray,
  replaceOneEscapeChar
};
