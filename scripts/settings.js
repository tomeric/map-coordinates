Hooks.on('init',  function () {
  game.settings.register("map-coordinates", "offset", {
    name: game.i18n.format("settings.offset.name"),
    hint: game.i18n.format("settings.offset.hint"),
    scope: 'client',
    type: Number,
    default: 0,
    config: true,
  });
  game.settings.register("map-coordinates", "xValue", {
    name: game.i18n.format("settings.xValue.name"),
    hint: game.i18n.format("settings.xValue.hint"),
    scope: 'world',
    type: String,
    choices: {
      "num" : "settings.value.number",
      "let" : "settings.value.letter"
    },
    default: "num",
    config: true,
  });
  game.settings.register("map-coordinates", "yValue", {
    name: game.i18n.format("settings.yValue.name"),
    hint: game.i18n.format("settings.yValue.hint"),
    scope: 'world',
    type: String,
    choices: {
      "num" : "settings.value.number",
      "let" : "settings.value.letter"
    },
    default: "num",
    config: true,
  });
  game.settings.register("map-coordinates", "startPoint", {
    name: game.i18n.format("settings.startPoint.name"),
    hint: game.i18n.format("settings.startPoint.hint"),
    scope: 'world',
    type: String,
    choices: {
      "left" : "settings.startPoint.left",
      "center" : "settings.startPoint.center",
      "right" : "settings.startPoint.right"
    },
    default: "left",
    config: false,
  });
  game.settings.register("map-coordinates", "keybind", {
    name: game.i18n.format("settings.keybind.name"),
    hint: game.i18n.format("settings.keybind.hint"),
    scope: 'client',
    type: String,
    default: "Alt",
    config: true,
  });
  game.settings.register("map-coordinates", "timeOut", {
    name: game.i18n.format("settings.timeOut.name"),
    hint: game.i18n.format("settings.timeOut.hint"),
    scope: 'client',
    type: Number,
    default: 1500,
    config: true,
  });

})

