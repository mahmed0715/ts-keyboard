(function ($) {
  var defaultObj = {
    Configuration: {},
    Data: [
      [
        {
          ID: 1,
          IPAnumber: null,
          Display: {
            Entity: "&#81;",
            Unicode: "U+0051",
            Image: {
              VECTOR: "",
              RESOLUTION1: "",
              RESOLUTION2: "",
              RESOLUTION3: ""

            }
          }
        },
        {
          ID: 2,
          IPAnumber: null,
          Display: {
            Entity: "&#87;",
            Unicode: "U+0057",
            Image: {
              VECTOR: "",
              RESOLUTION1: "",
              RESOLUTION2: "",
              RESOLUTION3: ""

            }
          }
        },
        {
          ID: 3,
          IPAnumber: null,
          Display: {
            Entity: "&#69;",
            Unicode: "U+0045",
            Image: {
              VECTOR: "",
              RESOLUTION1: "",
              RESOLUTION2: "",
              RESOLUTION3: ""

            }
          }
        },
        {
          ID: 4,
          IPAnumber: null,
          Display: {
            Entity: "&#82;",
            Unicode: "U+0052",
            Image: {
              VECTOR: "",
              RESOLUTION1: "",
              RESOLUTION2: "",
              RESOLUTION3: ""

            }
          }
        }
      ],
      [
        {
          ID: 5,
          IPAnumber: null,
          Display: {
            Entity: "&#65;",
            Unicode: "U+0041",
            Image: {
              VECTOR: "",
              RESOLUTION1: "",
              RESOLUTION2: "",
              RESOLUTION3: ""

            }
          }
        },
        {
          ID: 6,
          IPAnumber: null,
          Display: {
            Entity: "&#83;",
            Unicode: "U+0053",
            Image: {
              VECTOR: "",
              RESOLUTION1: "",
              RESOLUTION2: "",
              RESOLUTION3: ""

            }
          }
        },
        {
          ID: 7,
          IPAnumber: null,
          Display: {
            Entity: "&#68;",
            Unicode: "U+0044",
            Image: {
              VECTOR: "",
              RESOLUTION1: "",
              RESOLUTION2: "",
              RESOLUTION3: ""

            }
          }
        },
        {
          ID: 8,
          IPAnumber: null,
          Display: {
            Entity: "&#70;",
            Unicode: "U+0046",
            Image: {
              VECTOR: "",
              RESOLUTION1: "",
              RESOLUTION2: "",
              RESOLUTION3: ""

            }
          }
        }
      ],
      [
        {
          ID: 9,
          IPAnumber: null,
          Display: {
            Entity: "&#90;",
            Unicode: "U+005A",
            Image: {
              VECTOR: "",
              RESOLUTION1: "",
              RESOLUTION2: "",
              RESOLUTION3: ""

            }
          }
        },
        {
          ID: 10,
          IPAnumber: null,
          Display: {
            Entity: "&#88;",
            Unicode: "U+0058",
            Image: {
              VECTOR: "",
              RESOLUTION1: "",
              RESOLUTION2: "",
              RESOLUTION3: ""

            }
          }
        },
        {
          ID: 11,
          IPAnumber: null,
          Display: {
            Entity: "&#67;",
            Unicode: "U+0043",
            Image: {
              VECTOR: "",
              RESOLUTION1: "",
              RESOLUTION2: "",
              RESOLUTION3: ""

            }
          }
        },
        {
          ID: 12,
          IPAnumber: null,
          Display: {
            Entity: "&#86;",
            Unicode: "U+0056",
            Image: {
              VECTOR: "",
              RESOLUTION1: "",
              RESOLUTION2: "",
              RESOLUTION3: ""

            }
          }
        }
      ]
    ]
  };
  $.fn.tsKeyboard = function (obj) {
    if (typeof obj == 'object') {
      this.obj = obj;
    } else {
      this.obj = defaultObj;
    }
    $ref = this;
    if ($($ref).find(":first").hasClass('ts-keyboard')) {
      var id = $($ref).find(":first").attr('id');
      delete $ref.Q;
      $(document).off('click', '#' + id + " .ui-button")
      $($ref).html('');
    }
    var keyboard = (function ($ref) {
      var keyboard = {
        id: "",
        _init: function () {
          var $this = this;
          var placeholder = $("<div></div>");
          var tsId = uid();
          this.id = tsId;
          $($ref).append($(placeholder));
          $(placeholder).attr({'class': 'ts-keyboard', id: tsId, name: ""});
          var obj = $ref.obj;
          for (var row in obj.Data) {
            var rowDiv = $("<div></div>");
            rowDiv.attr({'class': "ts-keyboard-row ui-buttonset", id: tsId + "_row_" + row});
            $(placeholder).append($(rowDiv));
            for (var column in obj.Data[row]) {
              var columnDiv = $("<span></span>");
              columnDiv.attr({'class': "ts-keyboard-key ui-button", id: tsId + "_" + row + "_" + column});
              columnDiv.html(obj.Data[row][column].Display.Entity);
              rowDiv.append($(columnDiv));
            }

          }
          $(document).on('click', '#' + tsId + " .ui-button", function () {
            $this.get($(this).attr('id'));
          })
        },
        get: function (keyId) {
          var data = keyId.split("_");
          if (!$ref.Q) {
            this.flushQ();
          }
          $ref.Q.push($ref.obj.Data[data[1]][data[2]]);
          return $ref.obj.Data[data[1]][data[2]];
        },
        getQ: function () {
          return $ref.Q;
        },
        flushQ: function () {
          $ref.Q = [];
        },
        show: function () {
          $($ref).show();
        },
        hide: function () {
          $($ref).hide();
        }
      };
      return keyboard;
    })($ref);
    function uid() {
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
    }

    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
    keyboard._init();
    return keyboard;
  }
})(jQuery);

