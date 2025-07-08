const toolFunctions = {
  textDiff: function () {
    const text1 = document.getElementById("textDiff1").value;
    const text2 = document.getElementById("textDiff2").value;
    const output = document.getElementById("textDiffOutput");

    if (text1 === text2) {
      output.innerText = "Texts are identical ✅";
    } else {
      output.innerText = "Texts differ ❌";
    }
  },

  passwordStrength: function () {
    const input = document.getElementById("passwordStrengthInput").value;
    const output = document.getElementById("passwordStrengthOutput");
    let strength = "Weak";

    if (input.length > 8 && /[A-Z]/.test(input) && /[0-9]/.test(input)) {
      strength = "Strong 💪";
    } else if (input.length > 5) {
      strength = "Moderate ⚠️";
    }

    output.innerText = "Strength: " + strength;
  },

  morseCode: function (mode) {
    const morseMap = { A: ".-", B: "-...", C: "-.-.", D: "-.." /* ... */ };
    const input = document.getElementById("morseInput").value.trim();
    const output = document.getElementById("morseOutput");

    if (mode === "en") {
      output.value = input.toUpperCase().split('').map(c => morseMap[c] || c).join(' ');
    } else {
      output.value = "Decoding not implemented yet.";
    }
  }
};
