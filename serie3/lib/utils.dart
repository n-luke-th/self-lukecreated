import 'package:flutter/material.dart'
    show
        BuildContext,
        DismissDirection,
        EdgeInsets,
        EdgeInsetsDirectional,
        ScaffoldFeatureController,
        ScaffoldMessenger,
        SnackBar,
        SnackBarBehavior,
        SnackBarClosedReason,
        ThemeData,
        Widget;
import 'package:serie3/style.dart' show Style;
import 'package:url_launcher/url_launcher.dart'
    show LaunchMode, canLaunchUrl, launchUrl;

class Utils {
  /// Open a link in the default browser.
  static Future<bool> openLink(String url) async {
    final Uri parsedUrl = Uri.parse(url);
    if (await canLaunchUrl(parsedUrl)) {
      return await launchUrl(
        mode: LaunchMode.platformDefault,
        parsedUrl,
        webOnlyWindowName: "_blank",
      );
    } else {
      return false;
    }
  }

  /// Show a snackbar.
  static ScaffoldFeatureController<SnackBar, SnackBarClosedReason> showNoti({
    required Widget content,
    required BuildContext context,
    required ThemeData currentTheme,
  }) {
    return ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        behavior: SnackBarBehavior.floating,
        margin: EdgeInsets.only(
          bottom: Style.defaultPadding * Style.tinyPadding,
          right: Style.defaultPadding * Style.defaultPadding,
          left: Style.defaultPadding * Style.defaultPadding,
        ),
        padding: EdgeInsetsDirectional.all(Style.smallPadding),
        // action: SnackBarAction(
        //   label: "label",
        //   onPressed: () {},
        // ),
        elevation: 10,
        backgroundColor: currentTheme.colorScheme.inverseSurface,
        dismissDirection: DismissDirection.horizontal,
        showCloseIcon: true,
        closeIconColor: currentTheme.colorScheme.onInverseSurface,
        content: content,
      ),
      snackBarAnimationStyle: Style.animationStyle,
    );
  }
}
