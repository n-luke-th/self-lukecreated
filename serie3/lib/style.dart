import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class Style {
  // Space & Sizes
  static const SizedBox verticalSpace = SizedBox(height: 20);
  static const SizedBox horizontalSpace = SizedBox(width: 20);
  static const SizedBox smallVerticalSpace = SizedBox(height: 10);
  static const SizedBox smallHorizontalSpace = SizedBox(width: 10);
  static const SizedBox tinyVerticalSpace = SizedBox(height: 5);
  static const SizedBox tinyHorizontalSpace = SizedBox(width: 5);
  static const SizedBox largeVerticalSpace = SizedBox(height: 30);
  static const SizedBox largeHorizontalSpace = SizedBox(width: 30);
  static const SizedBox hugeVerticalSpace = SizedBox(height: 50);
  static const SizedBox hugeHorizontalSpace = SizedBox(width: 50);

  static const double tinyPadding = 4.0;
  static const double smallPadding = 8.0;
  static const double defaultPadding = 16.0;
  static const double largePadding = 32.0;
  static const double mediumPadding = 24.0;

  static const double tinyIconSize = 4.0;
  static const double smallIconSize = 8.0;
  static const double defaultIconSize = 16.0;
  static const double mediumIconSize = 24.0;
  static const double largeIconSize = 32.0;

  static const double defaultIconShortcutSize = 50;

  // Colors
  static const Color primaryColorLight = Color(0xFF1565C0); // indicator color
  static const Color secondaryColorLight = Color(0xFF1867C3); // 11
  static const Color backgroundColorLight = Color(0xccF4F9FE); // surface color
  static const Color textColorLight = Color(0xFF727208);
  static const Color primaryColorDark = Color(0xFF00BCD4); // indicator color
  static const Color secondaryColorDark = Color(0xFF38CEE6); // 11
  static const Color backgroundColorDark = Color(0x800C252B); // surface color
  static const Color textColorDark = Color(0xFF979736);
  static const Color secondaryTextColorLight = Color(0xFF211010);
  static const Color secondaryTextColorDark = Color(0xFFE4C9C9);

  // Text Styles
  static const double sectionTextSize = 20;
  static const double titleTextSize = 24;
  static const double subtitleTextSize = 18;
  static const double bodyTextSize = 16;
  static TextStyle titleTextStyle({
    required ThemeMode currentThemeMode,
  }) => TextStyle(
    fontFamily: GoogleFonts.krub().fontFamily,
    fontFamilyFallback: ["sans-serif"],
    fontSize: titleTextSize,
    fontWeight: FontWeight.bold,
    color: currentThemeMode == ThemeMode.light ? textColorLight : textColorDark,
  );
  static TextStyle subtitleTextStyle({
    required ThemeMode currentThemeMode,
  }) => TextStyle(
    fontFamily: GoogleFonts.krub().fontFamily,
    fontFamilyFallback: ["sans-serif"],
    fontSize: subtitleTextSize,
    fontWeight: FontWeight.bold,
    color: currentThemeMode == ThemeMode.light ? textColorLight : textColorDark,
  );
  static TextStyle bodyTextStyle({required ThemeMode currentThemeMode}) =>
      TextStyle(
        fontFamily: GoogleFonts.krub().fontFamily,
        fontFamilyFallback: ["sans-serif"],
        fontSize: bodyTextSize,
        color:
            currentThemeMode == ThemeMode.light
                ? secondaryTextColorLight
                : secondaryTextColorDark,
      );
  static TextStyle sectionTextStyle({
    required ThemeMode currentThemeMode,
  }) => TextStyle(
    fontFamily: GoogleFonts.krub().fontFamily,
    fontFamilyFallback: ["sans-serif"],
    fontSize: sectionTextSize,
    fontWeight: FontWeight.bold,
    color: currentThemeMode == ThemeMode.light ? textColorLight : textColorDark,
  );
}
