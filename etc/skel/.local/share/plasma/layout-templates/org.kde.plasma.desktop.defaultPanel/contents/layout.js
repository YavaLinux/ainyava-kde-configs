var panel = new Panel
var panelScreen = panel.screen

panel.height = 28
panel.location = "top";
panel.floating = false

const maximumAspectRatio = 21/9;
if (panel.formFactor === "horizontal") {
    const geo = screenGeometry(panelScreen);
    const maximumWidth = Math.ceil(geo.height * maximumAspectRatio);

    if (geo.width > maximumWidth) {
        panel.alignment = "center";
        panel.minimumLength = maximumWidth;
        panel.maximumLength = maximumWidth;
    }
}

panel.addWidget("org.kde.windowtitle")
panel.addWidget("org.kde.plasma.appmenu")
panel.addWidget("org.kde.plasma.panelspacer")
panel.addWidget("org.kde.plasma.digitalclock")
panel.addWidget("org.kde.plasma.panelspacer")
panel.addWidget("org.kde.plasma.pager")
panel.addWidget("org.kde.plasma.marginsseparator")
panel.addWidget("org.kde.plasma.systemtray")
panel.addWidget("org.kde.plasma.showdesktop")


var panel = new Panel
panel.height = 44
panel.location = "bottom"
panel.lengthMode = "fit"
panel.hiding = "dodgewindows"
panel.floating = false

panel.addWidget("org.kde.plasma.icontasks")
