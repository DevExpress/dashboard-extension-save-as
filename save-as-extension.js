var CustomExtensions;
(function (CustomExtensions) {
    function SaveAsDashboardExtension(dashboardControl) {
        var _this = this;
        this.name = "save-as";
        this.dashboardControl = dashboardControl;
        this.toolbox = this.dashboardControl.findExtension("toolbox");
        this.template = "dashboard-save-as-extension"

        this._menuSaveAsItem = new DevExpress.Dashboard.DashboardMenuItem("save-as", "Save As...", 120, 0, function() { _this.visible(true); });
        this._menuSaveAsItem.hasSeparator = true;
        this._menuSaveAsItem.data = _this;
        this.visible = ko.observable(false);
        this.newName = ko.observable("New Dashboard Name");

        this.saveAs = function () {
            var newExtension = dashboardControl.findExtension("create-dashboard");
            newExtension.performCreateDashboard(_this.newName(), dashboardControl.dashboard().getJSON());
            _this.hidePopup();
        };
        this.hidePopup = function () {
            _this.visible(false);
        }
        
    }
    SaveAsDashboardExtension.prototype.start = function () {
        this.toolbox.menuItems.push(this._menuSaveAsItem);
        this.toolbox.menuItems().filter(function (item) { return item.id === "save" })[0].hasSeparator = false;
    };
    SaveAsDashboardExtension.prototype.stop = function () {
        this.toolbox.menuItems.remove(this._menuSaveAsItem);
        this.toolbox.menuItems().filter(function (item) { return item.id === "save" })[0].hasSeparator = true;
    };

    CustomExtensions.SaveAsDashboardExtension = SaveAsDashboardExtension;
})(CustomExtensions || (CustomExtensions = {}));