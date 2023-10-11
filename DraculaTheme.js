// @ts-nocheck
const METADATA = {
  website: "https://github.com/subtixx/dracula-shapez",
  author: "Subtixx",
  name: "Dracula Theme",
  version: "0.1.0",
  id: "dracula-theme",
  description: "A dracula theme for Shapez.io",
  minimumGameVersion: ">=1.5.0",
  doesNotAffectSavegame: true,
};
class Mod extends shapez.Mod {
  init() {
    this.modInterface.registerGameTheme({
      id: "dracula",
      name: "Dracula",
      theme: RESOURCES["dracula.json"],
    });

    this.modInterface.registerCss(`
    :root {
        --background: #282a36;
        --currentLine: #44475a;
        --foreground: #f8f8f2;
        --comment: #6272a4;
        --cyan: #8be9fd;
        --green: #50fa7b;
        --orange: #ffb86c;
        --pink: #ff79c6;
        --purple: #bd93f9;
        --red: #ff5555;
        --yellow: #f1fa8c;
    }

    /*DRACULA*/
    html[data-theme=dracula] body{background: #282A36 !important; color: #F8F8F2;}
    html[data-theme=dracula] .styledButton {background: #ff79c6; color: #282a36;}
    html[data-theme=dracula]::-webkit-scrollbar-thumb{background: #ff79c6;}

    html[data-theme=dracula] .gameState.textualState .headerBar h1{color: #F8F8F2;}
    html[data-theme=dracula] .gameState.textualState>.container>.content {background: #44475a;}
    html[data-theme=dracula] .gameState.textualState>.container>.content a{color: #50fa7b;}
    html[data-theme=dracula] .gameState.textualState>.container>.content a:hover{color: #50fa7b; text-decoration: underline;}
    /*NORMAL*/
    html[data-theme=dracula] #state_MainMenuState .mainContainer{background: #44475a;}
    html[data-theme=dracula] #state_MainMenuState .mainContainer .buttons .continueButton {background: #50fa7b; color: #282A36;}
    html[data-theme=dracula] #state_MainMenuState .mainContainer .buttons .outer .modsButton {background: #ff79c6 !important; color: #282A36 !important;}
    html[data-theme=dracula] #state_MainMenuState .mainContainer .buttons .outer .newGameButton {background: #FF5555; color: #282A36; }
    html[data-theme=dracula] #state_MainMenuState .mainContainer .savegames .savegame button.resumeGame{background-color: #282a36;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAKESURBVHhe5Zu/Sh1BFMav0cZcDD5AkJAijXkBm6RQJPEpAunyBoGkipA2aWw1nfgA/gEttPEFIoKEVCkTCMJNlUC+b92BUdadveOZ2XPm/uBjLtPt75x1POzu1CDAaDRawrKDPKw2rvML+YRsDYfDH9WOMVoF4OJ50UfIk2rjdr4jm4g5Effq9TZeIaGLJ4+RD8jbWpoZQgKe1WtX3iBHkPDOioiQgBjYMWa6ISRgpl5jYDfsa++GlALIIqK6G1LcAk24buCRqopcAgi7Qd0fyJwCyCzCW2JPSzfkFuB4ihxq6Ia+BJD7SO/d0KcAB7uht+NSgwDyAOnluNQiwMHj8jhnN2gTQLIOVhoFOLIMVpoFkOSDlXYBjmSDlRUBJMlgZUmAQ3SwsiiAiA1WVgUQkcHKsgAH/5U+iO2GEgSQOSSqG0oR4GA37I7TDaUJIPNI5+OyRAEOHpd8sNNKyQLI61AXlC7gEdLaBaULIK2P9yZBwHS9NjIJAlqZBAH/6rWRSRBwUq+NlC6Ab65sXf1spnQBm6FXdkoWsIG0Vp+UKOA38h752OWFrdIEfEXWcOHrXd9WK0XAJcKqv8SFn1Y7HSlBAKv+Ypyq+1gW8AeJqrqPVQFnyEps1X0sCuDxxpaPrrqPJQGseufjrStWBLiq37nlb6JdwAUiXnUfzQJY9eUUVffRKIATXNKq+2gTwKo/T111Hy0CxhpgJNEgYOwBRpI+BUQPMJL0JeBOA4wkuQWIDDCS5BQgNsBIkkuA6AAjSUjA33qNJckAI0lKAckGGElS3ALniOqq+4QEtD5WaoBVX9VedR+pj6e/IV8Qcx9Pd/18fhtZqDau8xP5jBj9fH4w+A9DrPYctBPnkAAAAABJRU5ErkJggg==");}
    html[data-theme=dracula] #state_MainMenuState .mainContainer .steamSso .description {color: var(--foreground);}
    html[data-theme=dracula] #state_MainMenuState .mainContainer .savegamesMount .savegames .savegame {background: #282A36;}
    html[data-theme=dracula] #state_MainMenuState .mainContainer .savegamesMount .savegames .savegame button.deleteGame {background-color: #FF5555; color: #282A36;}
    html[data-theme=dracula] #state_MainMenuState .mainContainer .savegamesMount .savegames .savegame button.downloadGame {background-color: #50fa7b; color: #282A36;}
    /*ICON*/
    html[data-theme=dracula] #ingame_HUD_GameMenu > .button.save{background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAAboAAAG6AeirAQYAAAGrSURBVHhe7Zs9SsRAGIZ1yyWQRiLZFNmDeAGxsVK8guAJLGVPIFiIvWhl5wWsBW+QFDEkXYqk1fnIG9hiszOywSV5vwfCOxPI7sxDNvPD5rCu60We57dhGF4fbOZyPp+/orwTTdNcmHhpa730fp/t+izLUs/z7nzffzef8Y3TW5lZOj8qoiiKTeefkiR5NLIWOL2V2VQ6v85yuTwriuLTRcIMOTmODWVZftkkTFaAEATBkU3CpAUINgmTFyBsk0AhQOiTQCNA2CSBSoAgEtaHSDoBggyR3WSJUoAgk6Wqqk5lLfCDc30MuRaQ2+6krfXy0TePN9e7rCWckbXDvwrYlaEFCNafQJqmV90DY59IG6QtqA6Gyx0gEt7iOH5GdS9I500bzlEdDCcBU4Z2FOhQAUhaVACSFhWApEUFIGlRAUhaVACSFhWApMVlP+DGHGVbHB2BOe7b4mZGtSf4V1z2EPUZgKRFBSBpUQFIWlQAkhYVgKRFBSBpUQFIWlQAkhYVgKRFBSBpoReg2+L6P0FyVACSFhWApEVenn5AmQ7pu7w8vWKUIH0Ow3D1C5Edwmrgv3BdAAAAAElFTkSuQmCC");}
    html[data-theme=dracula] #ingame_HUD_GameMenu > .button.settings{background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAVYaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPg0KICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPg0KICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDUtMTFUMTU6MDE6NDkrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA1LTExVDE1OjA2OjU2KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA1LTExVDE1OjA2OjU2KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMSIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkdyYXkgR2FtbWEgMi4yIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmNjZDlhMzBjLWJjNmQtMzk0Zi05ZjcxLTJhOTQ0NDQxYWExOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpjY2Q5YTMwYy1iYzZkLTM5NGYtOWY3MS0yYTk0NDQ0MWFhMTgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjY2Q5YTMwYy1iYzZkLTM5NGYtOWY3MS0yYTk0NDQ0MWFhMTgiPg0KICAgICAgPHhtcE1NOkhpc3Rvcnk+DQogICAgICAgIDxyZGY6U2VxPg0KICAgICAgICAgIDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNjZDlhMzBjLWJjNmQtMzk0Zi05ZjcxLTJhOTQ0NDQxYWExOCIgc3RFdnQ6d2hlbj0iMjAyMC0wNS0xMVQxNTowMTo0OSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiAvPg0KICAgICAgICA8L3JkZjpTZXE+DQogICAgICA8L3htcE1NOkhpc3Rvcnk+DQogICAgPC9yZGY6RGVzY3JpcHRpb24+DQogIDwvcmRmOlJERj4NCjwveDp4bXBtZXRhPg0KPD94cGFja2V0IGVuZD0iciI/Pgah+D8AAAVRSURBVHhe7Zs9bCNFFMdtJ0piO7azJBGiiHKip4AmggYuRIBoTAENcBUf1Z0gBulo4A4hISTgThwpkLirQDQ0uDkJlAukOehoqNFFKRCKjR07/sqHw/8fv7Vi74d3szOX8yo/aTPvjb1v9/13Mjszu44uLCxEdLK2traM4lrH801ucXHxuthaiEmpjc3NzWfE9E2Qfb2iVQBc/Uenp6efFdc33JcxxNWC7haQTSQSSbF9I/tmO54efPcBckWytVotk0wmt2Hn8X/699GHfayurr4Xi8W+EPdEtNvt95eWlr4Utwc/5+KErxYgB7yI7RoOeIXl9vb2Tbtmyrpms/mEuCeGMZzi89gwu+eC7aLdd93w3AIkMJNnr94DrkBVTiLfqYlkcXIvZDKZ58QPBGKtIxZjd+Pv7Ox8NDk5OSX+cXjXWPHaEjwJ4Jb8ccrl8t3Dw8O4YRiPS5VSSqXSn9FotDE1NfWUVDnhWYSBAnhN/gHEkwiufcAQJ094zgP7BEcBhjx5k4Ei2AoQkuRNXEWwCBCy5E0cRbAIgIHHSyjClLzJsuTWg0WA3d3duJihwy43iwBjY2MNMUOHXW4WATB2/6lSqdwWNzQwJ+YmbheLABw4pNPpSxhqVqRq6OFQnTnZDYosAhB+EePsq+IOPZynOI0IbQUQ8piE/CL20CI5mJMoC24CRDCxSYmphUajUecmrhaQw6SYtrgJkMWs60mxlVCtVv8rFotfwcxxi8fjj3Ez/UKhcIPfga0MmTk6rirZzgY5YkIn+Bn6gVekKjC4B3+D29Dng2ZnPHar1bo8Pj7+tlQFBrn8iFw+sDt2VwAZJmb39vbG6vX6+Uwm8/zRBwEpl8v3cBVuwPS8XGWeC/Z9B/vOd2qDgb7g54mJiXUI24TbPZcobhHLGxsbS7Ozs08HWcC0AwlsIAEcy1vi/VAIxLiDGOekSgm4wLWtra31+fn5VQpwKPU6CPxgAyJwXnLSBysDcb0LBISJO95+fMAYgUR0Q4sA0pN7Xph0Q2KsqL47mGgR4ODg4FsVyZsw1v7+/i1xlaJFAHRa/4qpDMMw/hFTKTr7gKFAuQAytFXR+fWTR2zlaxVnLUBKZWBsn0Ch44luFrGVL9edtQAplYLh68NiKqNUKj0iplK0CDAyMvKWTGiUwFijo6NviKsULQKkUqmH2u32JRUiMAZjMaZUKUVbHxCLxd5FoaIzzEosLVCAHKbDtzlF7FSpg/P5IK2A+zKGuMpgrswZZu5+LIhwTYDLYA/mgsj9WhJrtVq3cPBPB4nAY5/Kklg/OBHlCxE4kVKz2fxuZmbmnlR13/nhn0KhcA5X6QJO1jiqVYfjwoybAPz/+x5NUOnK8HHMsb2OEZ4JcriLHC44tTzXu0A0Gq2KqQUmTsTVAnLYEdMWNwGyql5zO00kB8fbsa0A0gmG5tlgrVb7mDmJ24NFAH6xUql8jY4oLVVDTzKZTDEnOxEsAvA1knQ6/aK4oYE5nb0ic/aKjMdXZFBoexBxilz3/IoMihVsYRKBudg+qLEIQEImgmPyxFYAEhIRXJMnjgKQIRdhYPLEVQDiR4RSqfQHf9QgrnIQ+y9Mbn4X1w1PyZOBApBBIvA9PBQ5wzBew/YybZVvmCHWOgrG53tLr9PGUL189KEVz8kTx+mwHTKU7HmTHCf3KyYcb/YfkN+t1+ufJBKJV6XqRCDGD4jxoV18HPsmjn1eqoiv5IkvAYiIEJqfzfkWwA84QRWrSlp/P+ypDwhAPshqs+yr40lzF60CsDkWi8U74vqG+/pt0n7R3QIic3Nzv4npmyD7eiMS+R9Izrv5oQ0hLAAAAABJRU5ErkJggg==");}
    html[data-theme=dracula] #ingame_HUD_GameMenu > button.shop{background-image: url("data:image/png;base64,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");}
    html[data-theme=dracula] #ingame_HUD_GameMenu>button.stats{background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAAdkAAAHZASgbRJYAAAH6SURBVHhe7ZsxSAJRGMfrhohDsxSXQF3UxDZnh4LWIG7IvbWpreaG2iOQltZqao7GcwsH4cDEwVN0c3U4Du3e+S9IWrr3bnh83w/k/31v+B73A+/BQ9cXi8VaHMxms13Xde8LhcIJliIRzHgNZpybpjnBklLiFHAaxPOyk6YRCHhBrRQDqZxer7ePUhqVs1aJTcB8Pt9AKY3KWavEJkAXWACSLCwASRYWgCQLC0CShQUgycICkGSJ7T6g3W7fVCqVS7RSdLvd21qtdoX2B3HpEkR92f0bW1yyaClAPHi/3z9LpVIX2Ww2jeV/MRqNPl3XPdb1K1AvFovXUR9ekMvl9qrV6oeWAjqdziFKKdLp9JaWAnzf30EpDR+DSLKEp4DkcSIIjxTUIXGeArZtPwV9A60URrPZrE2nUyeoxR1+pM9wOLyDRO0wLMtqZTKZbfSRyOfzlud5B2i1wkgkEpuopXAc5wilVih7CQbvEhOlVvAxiCQLC0CShQUgycICkGRhAUiysAAkWVgAkiwsAEkWFoAkCwtAkoUFIMnCApBkYQFIsrAAJFlYAJIsLABJFpUCfGSIYRgeSmn+mPVrLxmUCSiVSu8oQ8rlsvjhlRJWZ63uJYMxmUweUEdmMBi0ksnkG9pvbPHXd9SRwQx72S0Re4k90UZmPB4/fgFhAKoN99Fm4wAAAABJRU5ErkJggg==");}
    /*MOD*/ 
    html[data-theme=dracula] #state_MainMenuState .modsOverview{background: #44475a;}
    html[data-theme=dracula] #state_MainMenuState .modsOverview h3{color: #F8F8F2;}
    html[data-theme=dracula] #state_MainMenuState .modsOverview .modsList{border: calc(1px*var(--ui-scale)) solid #F8F8F2;}
    html[data-theme=dracula] #state_MainMenuState .modsOverview .mod{background: #44475a;}
    html[data-theme=dracula] #state_MainMenuState .modsOverview .dlcHint{color: #F8F8F2;}
    /*MOD MENU*/
    html[data-theme=dracula] #state_ModsState>.headerBar .openModsFolder {background: #50fa7b; color: #282A36;}
    html[data-theme=dracula] #state_SettingsState .container .content .sidebar button.manageMods .newBadge {background: #ff79c6; color:#282a36;}
    html[data-theme=dracula] #state_ModsState .modsList .mod .author strong {color: #F8F8F2;}
    html[data-theme=dracula] #state_ModsState .modsList .mod .version strong {color: #F8F8F2;}
    html[data-theme=dracula] #state_ModsState .modsList .mod .mainInfo .description {color: #F8F8F2;}
    html[data-theme=dracula] #state_ModsState .modsList .mod{background: #282A36;}
    /*OPTION MENU*/
    html[data-theme=dracula] #state_SettingsState .container .content .sidebar button.categoryButton{background: #282A36; color: #F8F8F2;}
    html[data-theme=dracula] #state_SettingsState .container .content .sidebar button.categoryButton.active{background: #ff79c6;color: #F8F8F2;}
    html[data-theme=dracula] #state_SettingsState .container .content .categoryContainer .category .setting{background: #282a36; }
    html[data-theme=dracula] #state_SettingsState .container .content .categoryContainer .category .setting .value.enum{background: #6272a4; color: #F8F8F2;}
    html[data-theme=dracula] #state_SettingsState .container .content .categoryContainer .category .setting .desc {color: #F8F8F2;}
    html[data-theme=dracula] #state_SettingsState .container .content .sidebar button.about{background:#282a36;color:#F8F8F2;}
    html[data-theme=dracula] #state_SettingsState .container .content .sidebar button.privacy{background:#282a36;color:#F8F8F2;}
    /*CONTROL*/
    html[data-theme=dracula] .gameState.textualState>.container>.content .categoryLabel{color: #F8F8F2;}
    html[data-theme=dracula] #state_KeybindingsState .content .category .entry{color: #F8F8F2;}  
    html[data-theme=dracula] #state_KeybindingsState .content .category .entry .mapping{color: #F8F8F2;}
    html[data-theme=dracula] #state_KeybindingsState .content .hint {background: #282a36;color: #F8F8F2;}
    html[data-theme=dracula] .ingameDialog>.dialogInner{background: #44475a;}
    html[data-theme=dracula] .ingameDialog>.dialogInner.optionChooserDialog .optionParent .option{background: #282a36;}
    html[data-theme=dracula] .ingameDialog>.dialogInner.optionChooserDialog .optionParent .option.active{background: #ff79c6;color: #282a36;}
    html[data-theme=dracula] .ingameDialog>.dialogInner>.title{color: #F8F8F2;}
    /*INPUT*/
    html[data-theme=dracula] input.rangeInput{background: #6272a4;}
    html[data-theme=dracula] input.rangeInput::-webkit-slider-thumb{background: #ff79c6;}
    html[data-theme=dracula] .checkbox {background: #6272a4 }
    html[data-theme=dracula] .checkbox.checked{background: #ff79c6;}
    /*Background*/
    html[data-theme=dracula] body{background: #282a36;}   
        `);
  }
}

const RESOURCES = {
  "dracula.json": {
    map: {
      background: "#282a36",
      grid: "#44475a",
      gridLineWidth: 1,

      selectionOverlay: "#8be9fd",
      selectionOutline: "rgba(74, 163, 223, 0.5)",
      selectionBackground: "rgba(74, 163, 223, 0.2)",

      chunkBorders: "#44485F",
      //NON
      directionLock: {
        regular: {
          color: "#50fa7b",
          background: "rgba(74, 237, 134, 0.2)",
        },
        wires: {
          color: "#50fa7b",
          background: "rgba(74, 237, 134, 0.2)",
        },
        error: {
          color: "#FF5555",
          background: "rgba(255, 137, 137, 0.2)",
        },
      },
      //NON
      colorBlindPickerTile: "rgba(255, 255, 255, 0.5)",

      resources: {
        shape: "#6272a4",
        red: "#ff5555",
        green: "#50fa7b",
        blue: "#8be9fd",
      },

      chunkOverview: {
        empty: "rgba(125, 125, 125, 1)",
        filled: "rgba(135, 135, 135, 1)",
        beltColor: "#777",
      },
      //Update
      wires: {
        overlayColor: "rgba(97, 161, 152, 0.75)",
        previewColor: "rgb(97, 161, 152, 0.4)",
        highlightColor: "rgba(72, 137, 255, 1)",
      },

      connectedMiners: {
        overlay: "rgba(120, 120, 120, 0)",
        textColor: "#F8F8F2",
        textColorCapped: "#F8F8F2",
        background: "rgba(150, 150, 150, 0.65",
      },
      //NON
      zone: {
        borderSolid: "rgba(23, 192, 255, 1)",
        outerColor: "rgba(240, 240, 255, 0.5)",
      },
    },

    items: {
      outline: "rgba(100, 100, 100, 1)",
      outlineWidth: 0.75,
      circleBackground: "rgba(100, 100, 100, 0.25)",
    },

    shapeTooltip: {
      background: "rgba(125, 125, 125, 1)",
      outline: "#282a36",
    },
  },
};
