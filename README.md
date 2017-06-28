The **Save As** [Web Dashboard extension](https://documentation.devexpress.com/#Dashboard/CustomDocument117232) adds the additional "Save As" button to the [dashboard menu](https://documentation.devexpress.com/#Dashboard/CustomDocument117444) and allows you to save the opened dashboard with a different name.

![save-as-extension](https://user-images.githubusercontent.com/17986517/27138770-f4bfb910-5129-11e7-9346-a9a57dd41de8.png)

## Installation

1. Download the latest version of the extension [here](https://github.com/DevExpress/dashboard-extension-save-as/releases).

2. Add the *dist/save-as-extension.js* file in your project.

3. Attach the download script to the project inside the ```<head>``` section onto the page containing Web Dashboard.
```xml
<head>
    <script src="/dist/save-as-extension.js"></script>
    <!-- ... -->
</head>
```
4. Add the ```/dist/save-as-extension.html``` file content inside the ```<body>``` section. 

5. Handle the Web Dashboard's [BeforeRender](https://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboard_BeforeRendertopic) event to perform client-side customization of the Web Dashboard control before the control and its elements have been rendered.
```xml
<!-- For ASP.NET Web Forms -->
<dx:ASPxDashboard ID="ASPxDashboard1" runat="server" DashboardStorageFolder="~/App_Data/Dashboards">
  <ClientSideEvents BeforeRender="onBeforeRender" />
</dx:ASPxDashboard>
```
```C#
@* For ASP.NET MVC *@
@Html.DevExpress().Dashboard(settings => {
    settings.Name = "Dashboard";
    settings.ClientSideEvents.BeforeRender = "onBeforeRender";
}).GetHtml()
```

6. Register the custom item extension to add the Save As extension to the Web Dashboard.

```javascript
function onBeforeRender(sender) {
  var dashboardControl = sender.GetDashboardControl();
  dashboardControl.registerExtension(new CustomExtensions.SaveAsDashboardExtension(dashboardControl));
}
```

## License

This extension is distributed under the **MIT** license (free and open-source), but can only be used with a commercial DevExpress Dashboard software product. You can [review the license terms](https://www.devexpress.com/Support/EULAs/NetComponents.xml) or [download a free trial version](https://go.devexpress.com/DevExpressDownload_UniversalTrial.aspx) of the Dashboard suite at [DevExpress.com](https://www.devexpress.com).

## Support & Feedback

* Follow [this guideline](https://www.devexpress.com/Support/Center/Question/Details/T491859) for general information about a custom extension.
* To learn how to work with extensions, see the following [KB article](https://isc.devexpress.com/Thread/WorkplaceDetails/T466716).
* To address questions regarding the Web Dashboard and JavaScript API, use [DevExpress Support Center](https://www.devexpress.com/Support/Center).
