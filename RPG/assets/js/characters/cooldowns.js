$(domLoaded)

function domLoaded() {
  console.log("Dom loaded")

  // Spell Cooldowns //
  $("#skill1").click(function() {
    var btn = $(this);
    document.getElementById("skill1").style.filter = "grayscale(100%)";
    btn.prop('disabled', true);
    setTimeout(function() {
      document.getElementById("skill1").style.filter = "grayscale(0%)";
      btn.prop('disabled', false);
    }, 3000);
  });

  $("#skill2").click(function() {
    var btn = $(this);
    if (charSylvanas.select === 1) {
      if (charSylvanas.mana > spells[1].mana) {
        document.getElementById("skill2").style.filter = "grayscale(100%)";
        btn.prop('disabled', true);
        setTimeout(function() {
          document.getElementById("skill2").style.filter = "grayscale(0%)";
          btn.prop('disabled', false);
        }, 7000);
      }
    } else if (charMaiev.select === 1) {
      if (charMaiev.mana > spells[1].mana) {
        document.getElementById("skill2").style.filter = "grayscale(100%)";
        btn.prop('disabled', true);
        setTimeout(function() {
          document.getElementById("skill2").style.filter = "grayscale(0%)";
          btn.prop('disabled', false);
        }, 7000);
      }
    } else if (charIllidan.select === 1) {
      if (charIllidan.mana > spells[1].mana) {
        document.getElementById("skill2").style.filter = "grayscale(100%)";
        btn.prop('disabled', true);
        setTimeout(function() {
          document.getElementById("skill2").style.filter = "grayscale(0%)";
          btn.prop('disabled', false);
        }, 7000);
      }
    }
  });

  $("#skill3").click(function() {
    var btn = $(this);
    if (charSylvanas.select === 1) {
      if (charSylvanas.mana > spells[2].mana) {
        document.getElementById("skill3").style.filter = "grayscale(100%)";
        btn.prop('disabled', true);
        setTimeout(function() {
          document.getElementById("skill3").style.filter = "grayscale(0%)";
          btn.prop('disabled', false);
        }, 5000);
      }
    } else if (charMaiev.select === 1) {
      if (charMaiev.mana > spells[2].mana) {
        document.getElementById("skill3").style.filter = "grayscale(100%)";
        btn.prop('disabled', true);
        setTimeout(function() {
          document.getElementById("skill3").style.filter = "grayscale(0%)";
          btn.prop('disabled', false);
        }, 5000);
      }
    } else if (charIllidan.select === 1) {
      if (charIllidan.mana > spells[2].mana) {
        document.getElementById("skill3").style.filter = "grayscale(100%)";
        btn.prop('disabled', true);
        setTimeout(function() {
          document.getElementById("skill3").style.filter = "grayscale(0%)";
          btn.prop('disabled', false);
        }, 5000);
      }
    }
  });

  $("#skill4").click(function() {
    var btn = $(this);
    if (charSylvanas.select === 1) {
      if (charSylvanas.mana > spells[3].mana) {
        document.getElementById("skill4").style.filter = "grayscale(100%)";
        btn.prop('disabled', true);
        setTimeout(function() {
          document.getElementById("skill4").style.filter = "grayscale(0%)";
          btn.prop('disabled', false);
        }, 30000);
      }
    } else if (charMaiev.select === 1) {
      if (charMaiev.mana > spells[3].mana) {
        document.getElementById("skill4").style.filter = "grayscale(100%)";
        btn.prop('disabled', true);
        setTimeout(function() {
          document.getElementById("skill4").style.filter = "grayscale(0%)";
          btn.prop('disabled', false);
        }, 30000);
      }
    } else if (charIllidan.select === 1) {
      if (charIllidan.mana > spells[3].mana) {
        document.getElementById("skill4").style.filter = "grayscale(100%)";
        btn.prop('disabled', true);
        setTimeout(function() {
          document.getElementById("skill4").style.filter = "grayscale(0%)";
          btn.prop('disabled', false);
        }, 30000);
      }
    }
  });

  $("#skill5").click(function() {
    var btn = $(this);
    if (charSylvanas.select === 1) {
      if (charSylvanas.mana > spells[4].mana) {
        document.getElementById("skill5").style.filter = "grayscale(100%)";
        btn.prop('disabled', true);
        setTimeout(function() {
          document.getElementById("skill5").style.filter = "grayscale(0%)";
          btn.prop('disabled', false);
        }, 30000);
      }
    } else if (charMaiev.select === 1) {
      if (charMaiev.mana > spells[4].mana) {
        document.getElementById("skill5").style.filter = "grayscale(100%)";
        btn.prop('disabled', true);
        setTimeout(function() {
          document.getElementById("skill5").style.filter = "grayscale(0%)";
          btn.prop('disabled', false);
        }, 30000);
      }
    } else if (charIllidan.select === 1) {
      if (charIllidan.mana > spells[4].mana) {
        document.getElementById("skill5").style.filter = "grayscale(100%)";
        btn.prop('disabled', true);
        setTimeout(function() {
          document.getElementById("skill5").style.filter = "grayscale(0%)";
          btn.prop('disabled', false);
        }, 30000);
      }
    }
  });

  $("#skill6").click(function() {
    var btn = $(this);
    if (charSylvanas.select === 1) {
      if (charSylvanas.hp < 25) {
        document.getElementById("skill6").style.filter = "grayscale(100%)";
        btn.prop('disabled', true);
        setTimeout(function() {
          document.getElementById("skill6").style.filter = "grayscale(0%)";
          btn.prop('disabled', false);
        }, 10000);
      }
    } else if (charMaiev.select === 1) {
      if (charMaiev.hp < 25) {
        document.getElementById("skill6").style.filter = "grayscale(100%)";
        btn.prop('disabled', true);
        setTimeout(function() {
          document.getElementById("skill6").style.filter = "grayscale(0%)";
          btn.prop('disabled', false);
        }, 10000);
      }
    } else if (charIllidan.select === 1) {
      if (charIllidan.hp < 25) {
        document.getElementById("skill6").style.filter = "grayscale(100%)";
        btn.prop('disabled', true);
        setTimeout(function() {
          document.getElementById("skill6").style.filter = "grayscale(0%)";
          btn.prop('disabled', false);
        }, 10000);
      }
    }
  });

  $("#skill7").click(function() {
    var btn = $(this);
    if (charSylvanas.select === 1) {
      if (charSylvanas.mana < 20) {
        document.getElementById("skill7").style.filter = "grayscale(100%)";
        btn.prop('disabled', true);
        setTimeout(function() {
          document.getElementById("skill7").style.filter = "grayscale(0%)";
          btn.prop('disabled', false);
        }, 10000);
      }
    } else if (charMaiev.select === 1) {
      if (charMaiev.mana < 20) {
        document.getElementById("skill7").style.filter = "grayscale(100%)";
        btn.prop('disabled', true);
        setTimeout(function() {
          document.getElementById("skill7").style.filter = "grayscale(0%)";
          btn.prop('disabled', false);
        }, 10000);
      }
    } else if (charIllidan.select === 1) {
      if (charIllidan.mana < 20) {
        document.getElementById("skill7").style.filter = "grayscale(100%)";
        btn.prop('disabled', true);
        setTimeout(function() {
          document.getElementById("skill7").style.filter = "grayscale(0%)";
          btn.prop('disabled', false);
        }, 10000);
      }
    }
  })
}