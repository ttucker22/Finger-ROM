// DIP Joint data
const DIPData = [
    { flexion: '<-30', dtFlexion: 45, extension: '<-70', dtExtension: 45, ankylosis: '<-30', dtAnkylosis: 45 },
    { flexion: -30, dtFlexion: 45, extension: -70, dtExtension: 45, ankylosis: -30, dtAnkylosis: 45 },
    { flexion: -29, dtFlexion: 45, extension: -69, dtExtension: 44, ankylosis: -29, dtAnkylosis: 45 },
    { flexion: -28, dtFlexion: 44, extension: -68, dtExtension: 43, ankylosis: -28, dtAnkylosis: 44 },
    { flexion: -27, dtFlexion: 44, extension: -67, dtExtension: 43, ankylosis: -27, dtAnkylosis: 44 },
    { flexion: -26, dtFlexion: 43, extension: -66, dtExtension: 42, ankylosis: -26, dtAnkylosis: 43 },
    { flexion: -25, dtFlexion: 43, extension: -65, dtExtension: 41, ankylosis: -25, dtAnkylosis: 43 },
    { flexion: -24, dtFlexion: 42, extension: -64, dtExtension: 41, ankylosis: -24, dtAnkylosis: 42 },
    { flexion: -23, dtFlexion: 42, extension: -63, dtExtension: 40, ankylosis: -23, dtAnkylosis: 42 },
    { flexion: -22, dtFlexion: 41, extension: -62, dtExtension: 39, ankylosis: -22, dtAnkylosis: 41 },
    { flexion: -21, dtFlexion: 41, extension: -61, dtExtension: 39, ankylosis: -21, dtAnkylosis: 41 },
    { flexion: -20, dtFlexion: 40, extension: -60, dtExtension: 38, ankylosis: -20, dtAnkylosis: 40 },
    { flexion: -19, dtFlexion: 40, extension: -59, dtExtension: 37, ankylosis: -19, dtAnkylosis: 40 },
    { flexion: -18, dtFlexion: 39, extension: -58, dtExtension: 37, ankylosis: -18, dtAnkylosis: 39 },
    { flexion: -17, dtFlexion: 39, extension: -57, dtExtension: 36, ankylosis: -17, dtAnkylosis: 39 },
    { flexion: -16, dtFlexion: 38, extension: -56, dtExtension: 35, ankylosis: -16, dtAnkylosis: 38 },
    { flexion: -15, dtFlexion: 38, extension: -55, dtExtension: 35, ankylosis: -15, dtAnkylosis: 38 },
    { flexion: -14, dtFlexion: 37, extension: -54, dtExtension: 34, ankylosis: -14, dtAnkylosis: 37 },
    { flexion: -13, dtFlexion: 37, extension: -53, dtExtension: 33, ankylosis: -13, dtAnkylosis: 37 },
    { flexion: -12, dtFlexion: 36, extension: -52, dtExtension: 33, ankylosis: -12, dtAnkylosis: 36 },
    { flexion: -11, dtFlexion: 36, extension: -51, dtExtension: 32, ankylosis: -11, dtAnkylosis: 36 },
    { flexion: -10, dtFlexion: 35, extension: -50, dtExtension: 31, ankylosis: -10, dtAnkylosis: 35 },
    { flexion: -9, dtFlexion: 35, extension: -49, dtExtension: 31, ankylosis: -9, dtAnkylosis: 35 },
    { flexion: -8, dtFlexion: 34, extension: -48, dtExtension: 30, ankylosis: -8, dtAnkylosis: 34 },
    { flexion: -7, dtFlexion: 34, extension: -47, dtExtension: 29, ankylosis: -7, dtAnkylosis: 34 },
    { flexion: -6, dtFlexion: 33, extension: -46, dtExtension: 29, ankylosis: -6, dtAnkylosis: 33 },
    { flexion: -5, dtFlexion: 33, extension: -45, dtExtension: 28, ankylosis: -5, dtAnkylosis: 33 },
    { flexion: -4, dtFlexion: 32, extension: -44, dtExtension: 27, ankylosis: -4, dtAnkylosis: 32 },
    { flexion: -3, dtFlexion: 32, extension: -43, dtExtension: 27, ankylosis: -3, dtAnkylosis: 32 },
    { flexion: -2, dtFlexion: 31, extension: -42, dtExtension: 26, ankylosis: -2, dtAnkylosis: 31 },
    { flexion: -1, dtFlexion: 31, extension: -41, dtExtension: 25, ankylosis: -1, dtAnkylosis: 31 },
    { flexion: 0, dtFlexion: 30, extension: -40, dtExtension: 25, ankylosis: 0, dtAnkylosis: 30 },
    { flexion: 1, dtFlexion: 30, extension: -39, dtExtension: 24, ankylosis: 1, dtAnkylosis: 30 },
    { flexion: 2, dtFlexion: 29, extension: -38, dtExtension: 23, ankylosis: 2, dtAnkylosis: 29 },
    { flexion: 3, dtFlexion: 29, extension: -37, dtExtension: 23, ankylosis: 3, dtAnkylosis: 29 },
    { flexion: 4, dtFlexion: 28, extension: -36, dtExtension: 22, ankylosis: 4, dtAnkylosis: 28 },
    { flexion: 5, dtFlexion: 28, extension: -35, dtExtension: 21, ankylosis: 5, dtAnkylosis: 28 },
    { flexion: 6, dtFlexion: 27, extension: -34, dtExtension: 21, ankylosis: 6, dtAnkylosis: 27 },
    { flexion: 7, dtFlexion: 27, extension: -33, dtExtension: 20, ankylosis: 7, dtAnkylosis: 27 },
    { flexion: 8, dtFlexion: 26, extension: -32, dtExtension: 19, ankylosis: 8, dtAnkylosis: 26 },
    { flexion: 9, dtFlexion: 26, extension: -31, dtExtension: 19, ankylosis: 9, dtAnkylosis: 26 },
    { flexion: 10, dtFlexion: 25, extension: -30, dtExtension: 18, ankylosis: 10, dtAnkylosis: 25 },
    { flexion: 11, dtFlexion: 25, extension: -29, dtExtension: 17, ankylosis: 11, dtAnkylosis: 25 },
    { flexion: 12, dtFlexion: 24, extension: -28, dtExtension: 17, ankylosis: 12, dtAnkylosis: 24 },
    { flexion: 13, dtFlexion: 24, extension: -27, dtExtension: 16, ankylosis: 13, dtAnkylosis: 24 },
    { flexion: 14, dtFlexion: 23, extension: -26, dtExtension: 15, ankylosis: 14, dtAnkylosis: 23 },
    { flexion: 15, dtFlexion: 23, extension: -25, dtExtension: 15, ankylosis: 15, dtAnkylosis: 23 },
    { flexion: 16, dtFlexion: 22, extension: -24, dtExtension: 14, ankylosis: 16, dtAnkylosis: 22 },
    { flexion: 17, dtFlexion: 22, extension: -23, dtExtension: 13, ankylosis: 17, dtAnkylosis: 22 },
    { flexion: 18, dtFlexion: 21, extension: -22, dtExtension: 13, ankylosis: 18, dtAnkylosis: 21 },
    { flexion: 19, dtFlexion: 21, extension: -21, dtExtension: 12, ankylosis: 19, dtAnkylosis: 21 },
    { flexion: 20, dtFlexion: 20, extension: -20, dtExtension: 11, ankylosis: 20, dtAnkylosis: 20 },
    { flexion: 21, dtFlexion: 20, extension: -19, dtExtension: 11, ankylosis: 21, dtAnkylosis: 20 },
    { flexion: 22, dtFlexion: 19, extension: -18, dtExtension: 10, ankylosis: 22, dtAnkylosis: 19 },
    { flexion: 23, dtFlexion: 19, extension: -17, dtExtension: 9, ankylosis: 23, dtAnkylosis: 19 },
    { flexion: 24, dtFlexion: 18, extension: -16, dtExtension: 9, ankylosis: 24, dtAnkylosis: 18 },
    { flexion: 25, dtFlexion: 18, extension: -15, dtExtension: 8, ankylosis: 25, dtAnkylosis: 18 },
    { flexion: 26, dtFlexion: 17, extension: -14, dtExtension: 7, ankylosis: 26, dtAnkylosis: 17 },
    { flexion: 27, dtFlexion: 17, extension: -13, dtExtension: 7, ankylosis: 27, dtAnkylosis: 17 },
    { flexion: 28, dtFlexion: 16, extension: -12, dtExtension: 6, ankylosis: 28, dtAnkylosis: 16 },
    { flexion: 29, dtFlexion: 16, extension: -11, dtExtension: 5, ankylosis: 29, dtAnkylosis: 16 },
    { flexion: 30, dtFlexion: 15, extension: -10, dtExtension: 5, ankylosis: 30, dtAnkylosis: 15 },
    { flexion: 31, dtFlexion: 15, extension: -9, dtExtension: 4, ankylosis: 31, dtAnkylosis: 15 },
    { flexion: 32, dtFlexion: 14, extension: -8, dtExtension: 3, ankylosis: 32, dtAnkylosis: 14 },
    { flexion: 33, dtFlexion: 14, extension: -7, dtExtension: 3, ankylosis: 33, dtAnkylosis: 14 },
    { flexion: 34, dtFlexion: 13, extension: -6, dtExtension: 2, ankylosis: 34, dtAnkylosis: 13 },
    { flexion: 35, dtFlexion: 13, extension: -5, dtExtension: 1, ankylosis: 35, dtAnkylosis: 13 },
    { flexion: 36, dtFlexion: 12, extension: -4, dtExtension: 1, ankylosis: 36, dtAnkylosis: 12 },
    { flexion: 37, dtFlexion: 12, extension: -3, dtExtension: 0, ankylosis: 37, dtAnkylosis: 12 },
    { flexion: 38, dtFlexion: 11, extension: -2, dtExtension: 0, ankylosis: 38, dtAnkylosis: 11 },
    { flexion: 39, dtFlexion: 11, extension: -1, dtExtension: 0, ankylosis: 39, dtAnkylosis: 11 },
    { flexion: 40, dtFlexion: 10, extension: 0, dtExtension: 0, ankylosis: 40, dtAnkylosis: 10 }
];

// PIP Joint data
const PIPData = [
    { flexion: '<-30', dtFlexion: 80, extension: '<-100', dtExtension: 80, ankylosis: '<-30', dtAnkylosis: 80 },
    { flexion: -30, dtFlexion: 80, extension: -100, dtExtension: 80, ankylosis: -30, dtAnkylosis: 80 },
    { flexion: -29, dtFlexion: 79, extension: -99, dtExtension: 79, ankylosis: -29, dtAnkylosis: 79 },
    { flexion: -28, dtFlexion: 79, extension: -98, dtExtension: 78, ankylosis: -28, dtAnkylosis: 79 },
    { flexion: -27, dtFlexion: 78, extension: -97, dtExtension: 77, ankylosis: -27, dtAnkylosis: 78 },
    { flexion: -26, dtFlexion: 78, extension: -96, dtExtension: 77, ankylosis: -26, dtAnkylosis: 78 },
    { flexion: -25, dtFlexion: 77, extension: -95, dtExtension: 76, ankylosis: -25, dtAnkylosis: 77 },
    { flexion: -24, dtFlexion: 77, extension: -94, dtExtension: 75, ankylosis: -24, dtAnkylosis: 77 },
    { flexion: -23, dtFlexion: 76, extension: -93, dtExtension: 75, ankylosis: -23, dtAnkylosis: 76 },
    { flexion: -22, dtFlexion: 76, extension: -92, dtExtension: 74, ankylosis: -22, dtAnkylosis: 76 },
    { flexion: -21, dtFlexion: 75, extension: -91, dtExtension: 73, ankylosis: -21, dtAnkylosis: 75 },
    { flexion: -20, dtFlexion: 75, extension: -90, dtExtension: 73, ankylosis: -20, dtAnkylosis: 75 },
    { flexion: -19, dtFlexion: 74, extension: -89, dtExtension: 72, ankylosis: -19, dtAnkylosis: 74 },
    { flexion: -18, dtFlexion: 74, extension: -88, dtExtension: 71, ankylosis: -18, dtAnkylosis: 74 },
    { flexion: -17, dtFlexion: 73, extension: -87, dtExtension: 71, ankylosis: -17, dtAnkylosis: 73 },
    { flexion: -16, dtFlexion: 73, extension: -86, dtExtension: 70, ankylosis: -16, dtAnkylosis: 73 },
    { flexion: -15, dtFlexion: 72, extension: -85, dtExtension: 69, ankylosis: -15, dtAnkylosis: 72 },
    { flexion: -14, dtFlexion: 72, extension: -84, dtExtension: 69, ankylosis: -14, dtAnkylosis: 72 },
    { flexion: -13, dtFlexion: 71, extension: -83, dtExtension: 68, ankylosis: -13, dtAnkylosis: 71 },
    { flexion: -12, dtFlexion: 71, extension: -82, dtExtension: 67, ankylosis: -12, dtAnkylosis: 71 },
    { flexion: -11, dtFlexion: 70, extension: -81, dtExtension: 67, ankylosis: -11, dtAnkylosis: 70 },
    { flexion: -10, dtFlexion: 70, extension: -80, dtExtension: 66, ankylosis: -10, dtAnkylosis: 70 },
    { flexion: -9, dtFlexion: 69, extension: -79, dtExtension: 65, ankylosis: -9, dtAnkylosis: 69 },
    { flexion: -8, dtFlexion: 69, extension: -78, dtExtension: 65, ankylosis: -8, dtAnkylosis: 69 },
    { flexion: -7, dtFlexion: 68, extension: -77, dtExtension: 64, ankylosis: -7, dtAnkylosis: 68 },
    { flexion: -6, dtFlexion: 68, extension: -76, dtExtension: 63, ankylosis: -6, dtAnkylosis: 68 },
    { flexion: -5, dtFlexion: 67, extension: -75, dtExtension: 63, ankylosis: -5, dtAnkylosis: 67 },
    { flexion: -4, dtFlexion: 67, extension: -74, dtExtension: 62, ankylosis: -4, dtAnkylosis: 67 },
    { flexion: -3, dtFlexion: 66, extension: -73, dtExtension: 61, ankylosis: -3, dtAnkylosis: 66 },
    { flexion: -2, dtFlexion: 66, extension: -72, dtExtension: 61, ankylosis: -2, dtAnkylosis: 66 },
    { flexion: -1, dtFlexion: 65, extension: -71, dtExtension: 60, ankylosis: -1, dtAnkylosis: 65 },
    { flexion: 0, dtFlexion: 65, extension: -70, dtExtension: 59, ankylosis: 0, dtAnkylosis: 65 },
    { flexion: 1, dtFlexion: 64, extension: -69, dtExtension: 59, ankylosis: 1, dtAnkylosis: 64 },
    { flexion: 2, dtFlexion: 64, extension: -68, dtExtension: 58, ankylosis: 2, dtAnkylosis: 64 },
    { flexion: 3, dtFlexion: 63, extension: -67, dtExtension: 57, ankylosis: 3, dtAnkylosis: 63 },
    { flexion: 4, dtFlexion: 63, extension: -66, dtExtension: 57, ankylosis: 4, dtAnkylosis: 63 },
    { flexion: 5, dtFlexion: 62, extension: -65, dtExtension: 56, ankylosis: 5, dtAnkylosis: 62 },
    { flexion: 6, dtFlexion: 62, extension: -64, dtExtension: 55, ankylosis: 6, dtAnkylosis: 62 },
    { flexion: 7, dtFlexion: 61, extension: -63, dtExtension: 55, ankylosis: 7, dtAnkylosis: 61 },
    { flexion: 8, dtFlexion: 61, extension: -62, dtExtension: 54, ankylosis: 8, dtAnkylosis: 61 },
    { flexion: 9, dtFlexion: 60, extension: -61, dtExtension: 53, ankylosis: 9, dtAnkylosis: 60 },
    { flexion: 10, dtFlexion: 60, extension: -60, dtExtension: 53, ankylosis: 10, dtAnkylosis: 60 },
    { flexion: 11, dtFlexion: 59, extension: -59, dtExtension: 52, ankylosis: 11, dtAnkylosis: 59 },
    { flexion: 12, dtFlexion: 59, extension: -58, dtExtension: 51, ankylosis: 12, dtAnkylosis: 59 },
    { flexion: 13, dtFlexion: 58, extension: -57, dtExtension: 51, ankylosis: 13, dtAnkylosis: 58 },
    { flexion: 14, dtFlexion: 58, extension: -56, dtExtension: 50, ankylosis: 14, dtAnkylosis: 58 },
    { flexion: 15, dtFlexion: 57, extension: -55, dtExtension: 49, ankylosis: 15, dtAnkylosis: 57 },
    { flexion: 16, dtFlexion: 57, extension: -54, dtExtension: 49, ankylosis: 16, dtAnkylosis: 57 },
    { flexion: 17, dtFlexion: 56, extension: -53, dtExtension: 48, ankylosis: 17, dtAnkylosis: 56 },
    { flexion: 18, dtFlexion: 56, extension: -52, dtExtension: 47, ankylosis: 18, dtAnkylosis: 56 },
    { flexion: 19, dtFlexion: 55, extension: -51, dtExtension: 47, ankylosis: 19, dtAnkylosis: 55 },
    { flexion: 20, dtFlexion: 55, extension: -50, dtExtension: 46, ankylosis: 20, dtAnkylosis: 55 },
    { flexion: 21, dtFlexion: 54, extension: -49, dtExtension: 45, ankylosis: 21, dtAnkylosis: 54 },
    { flexion: 22, dtFlexion: 54, extension: -48, dtExtension: 45, ankylosis: 22, dtAnkylosis: 54 },
    { flexion: 23, dtFlexion: 53, extension: -47, dtExtension: 44, ankylosis: 23, dtAnkylosis: 53 },
    { flexion: 24, dtFlexion: 53, extension: -46, dtExtension: 43, ankylosis: 24, dtAnkylosis: 53 },
    { flexion: 25, dtFlexion: 52, extension: -45, dtExtension: 43, ankylosis: 25, dtAnkylosis: 52 },
    { flexion: 26, dtFlexion: 52, extension: -44, dtExtension: 42, ankylosis: 26, dtAnkylosis: 52 },
    { flexion: 27, dtFlexion: 51, extension: -43, dtExtension: 41, ankylosis: 27, dtAnkylosis: 51 },
    { flexion: 28, dtFlexion: 51, extension: -42, dtExtension: 41, ankylosis: 28, dtAnkylosis: 51 },
    { flexion: 29, dtFlexion: 50, extension: -41, dtExtension: 40, ankylosis: 29, dtAnkylosis: 50 },
    { flexion: 30, dtFlexion: 50, extension: -40, dtExtension: 39, ankylosis: 30, dtAnkylosis: 50 },
    { flexion: 31, dtFlexion: 49, extension: -39, dtExtension: 39, ankylosis: 31, dtAnkylosis: 49 },
    { flexion: 32, dtFlexion: 49, extension: -38, dtExtension: 38, ankylosis: 32, dtAnkylosis: 49 },
    { flexion: 33, dtFlexion: 48, extension: -37, dtExtension: 37, ankylosis: 33, dtAnkylosis: 48 },
    { flexion: 34, dtFlexion: 48, extension: -36, dtExtension: 37, ankylosis: 34, dtAnkylosis: 48 },
    { flexion: 35, dtFlexion: 47, extension: -35, dtExtension: 36, ankylosis: 35, dtAnkylosis: 47 },
    { flexion: 36, dtFlexion: 47, extension: -34, dtExtension: 35, ankylosis: 36, dtAnkylosis: 47 },
    { flexion: 37, dtFlexion: 46, extension: -33, dtExtension: 35, ankylosis: 37, dtAnkylosis: 46 },
    { flexion: 38, dtFlexion: 46, extension: -32, dtExtension: 34, ankylosis: 38, dtAnkylosis: 46 },
    { flexion: 39, dtFlexion: 45, extension: -31, dtExtension: 33, ankylosis: 39, dtAnkylosis: 45 },
    { flexion: 40, dtFlexion: 45, extension: -30, dtExtension: 33, ankylosis: 40, dtAnkylosis: 45 }
];

// MP Joint data
const MPData = [
    { flexion: '<-20', dtFlexion: 60, extension: '<-90', dtExtension: 100, ankylosis: '<-20', dtAnkylosis: 60 },
    { flexion: -20, dtFlexion: 60, extension: -90, dtExtension: 100, ankylosis: -20, dtAnkylosis: 60 },
    { flexion: -19, dtFlexion: 59, extension: -89, dtExtension: 99, ankylosis: -19, dtAnkylosis: 60 },
    { flexion: -18, dtFlexion: 59, extension: -88, dtExtension: 97, ankylosis: -18, dtAnkylosis: 59 },
    { flexion: -17, dtFlexion: 58, extension: -87, dtExtension: 96, ankylosis: -17, dtAnkylosis: 59 },
    { flexion: -16, dtFlexion: 58, extension: -86, dtExtension: 95, ankylosis: -16, dtAnkylosis: 58 },
    { flexion: -15, dtFlexion: 57, extension: -85, dtExtension: 93, ankylosis: -15, dtAnkylosis: 58 },
    { flexion: -14, dtFlexion: 57, extension: -84, dtExtension: 92, ankylosis: -14, dtAnkylosis: 57 },
    { flexion: -13, dtFlexion: 56, extension: -83, dtExtension: 91, ankylosis: -13, dtAnkylosis: 57 },
    { flexion: -12, dtFlexion: 56, extension: -82, dtExtension: 89, ankylosis: -12, dtAnkylosis: 56 },
    { flexion: -11, dtFlexion: 55, extension: -81, dtExtension: 88, ankylosis: -11, dtAnkylosis: 55 },
    { flexion: -10, dtFlexion: 55, extension: -80, dtExtension: 87, ankylosis: -10, dtAnkylosis: 55 },
    { flexion: -9, dtFlexion: 54, extension: -79, dtExtension: 85, ankylosis: -9, dtAnkylosis: 54 },
    { flexion: -8, dtFlexion: 54, extension: -78, dtExtension: 84, ankylosis: -8, dtAnkylosis: 54 },
    { flexion: -7, dtFlexion: 53, extension: -77, dtExtension: 83, ankylosis: -7, dtAnkylosis: 53 },
    { flexion: -6, dtFlexion: 53, extension: -76, dtExtension: 81, ankylosis: -6, dtAnkylosis: 53 },
    { flexion: -5, dtFlexion: 52, extension: -75, dtExtension: 80, ankylosis: -5, dtAnkylosis: 52 },
    { flexion: -4, dtFlexion: 52, extension: -74, dtExtension: 79, ankylosis: -4, dtAnkylosis: 52 },
    { flexion: -3, dtFlexion: 51, extension: -73, dtExtension: 77, ankylosis: -3, dtAnkylosis: 51 },
    { flexion: -2, dtFlexion: 51, extension: -72, dtExtension: 76, ankylosis: -2, dtAnkylosis: 51 },
    { flexion: -1, dtFlexion: 50, extension: -71, dtExtension: 75, ankylosis: -1, dtAnkylosis: 50 },
    { flexion: 0, dtFlexion: 50, extension: -70, dtExtension: 73, ankylosis: 0, dtAnkylosis: 50 },
    { flexion: 1, dtFlexion: 49, extension: -69, dtExtension: 72, ankylosis: 1, dtAnkylosis: 49 },
    { flexion: 2, dtFlexion: 49, extension: -68, dtExtension: 71, ankylosis: 2, dtAnkylosis: 49 },
    { flexion: 3, dtFlexion: 48, extension: -67, dtExtension: 69, ankylosis: 3, dtAnkylosis: 48 },
    { flexion: 4, dtFlexion: 48, extension: -66, dtExtension: 68, ankylosis: 4, dtAnkylosis: 48 },
    { flexion: 5, dtFlexion: 47, extension: -65, dtExtension: 67, ankylosis: 5, dtAnkylosis: 47 },
    { flexion: 6, dtFlexion: 47, extension: -64, dtExtension: 65, ankylosis: 6, dtAnkylosis: 47 },
    { flexion: 7, dtFlexion: 46, extension: -63, dtExtension: 64, ankylosis: 7, dtAnkylosis: 46 },
    { flexion: 8, dtFlexion: 46, extension: -62, dtExtension: 63, ankylosis: 8, dtAnkylosis: 46 },
    { flexion: 9, dtFlexion: 45, extension: -61, dtExtension: 61, ankylosis: 9, dtAnkylosis: 45 },
    { flexion: 10, dtFlexion: 45, extension: -60, dtExtension: 60, ankylosis: 10, dtAnkylosis: 45 },
    { flexion: 11, dtFlexion: 44, extension: -59, dtExtension: 59, ankylosis: 11, dtAnkylosis: 44 },
    { flexion: 12, dtFlexion: 44, extension: -58, dtExtension: 57, ankylosis: 12, dtAnkylosis: 44 },
    { flexion: 13, dtFlexion: 43, extension: -57, dtExtension: 56, ankylosis: 13, dtAnkylosis: 43 },
    { flexion: 14, dtFlexion: 43, extension: -56, dtExtension: 55, ankylosis: 14, dtAnkylosis: 43 },
    { flexion: 15, dtFlexion: 42, extension: -55, dtExtension: 53, ankylosis: 15, dtAnkylosis: 42 },
    { flexion: 16, dtFlexion: 42, extension: -54, dtExtension: 52, ankylosis: 16, dtAnkylosis: 42 },
    { flexion: 17, dtFlexion: 41, extension: -53, dtExtension: 51, ankylosis: 17, dtAnkylosis: 41 },
    { flexion: 18, dtFlexion: 41, extension: -52, dtExtension: 49, ankylosis: 18, dtAnkylosis: 41 },
    { flexion: 19, dtFlexion: 40, extension: -51, dtExtension: 48, ankylosis: 19, dtAnkylosis: 40 },
    { flexion: 20, dtFlexion: 40, extension: -50, dtExtension: 47, ankylosis: 20, dtAnkylosis: 40 },
    { flexion: 21, dtFlexion: 39, extension: -49, dtExtension: 45, ankylosis: 21, dtAnkylosis: 39 },
    { flexion: 22, dtFlexion: 39, extension: -48, dtExtension: 44, ankylosis: 22, dtAnkylosis: 39 },
    { flexion: 23, dtFlexion: 38, extension: -47, dtExtension: 43, ankylosis: 23, dtAnkylosis: 38 },
    { flexion: 24, dtFlexion: 38, extension: -46, dtExtension: 41, ankylosis: 24, dtAnkylosis: 38 },
    { flexion: 25, dtFlexion: 37, extension: -45, dtExtension: 40, ankylosis: 25, dtAnkylosis: 37 },
    { flexion: 26, dtFlexion: 37, extension: -44, dtExtension: 39, ankylosis: 26, dtAnkylosis: 37 },
    { flexion: 27, dtFlexion: 36, extension: -43, dtExtension: 37, ankylosis: 27, dtAnkylosis: 36 },
    { flexion: 28, dtFlexion: 36, extension: -42, dtExtension: 36, ankylosis: 28, dtAnkylosis: 36 },
    { flexion: 29, dtFlexion: 35, extension: -41, dtExtension: 35, ankylosis: 29, dtAnkylosis: 35 },
    { flexion: 30, dtFlexion: 35, extension: -40, dtExtension: 33, ankylosis: 30, dtAnkylosis: 35 },
    { flexion: 31, dtFlexion: 34, extension: -39, dtExtension: 32, ankylosis: 31, dtAnkylosis: 34 },
    { flexion: 32, dtFlexion: 34, extension: -38, dtExtension: 31, ankylosis: 32, dtAnkylosis: 34 },
    { flexion: 33, dtFlexion: 33, extension: -37, dtExtension: 29, ankylosis: 33, dtAnkylosis: 33 },
    { flexion: 34, dtFlexion: 33, extension: -36, dtExtension: 28, ankylosis: 34, dtAnkylosis: 33 },
    { flexion: 35, dtFlexion: 32, extension: -35, dtExtension: 27, ankylosis: 35, dtAnkylosis: 32 },
    { flexion: 36, dtFlexion: 32, extension: -34, dtExtension: 25, ankylosis: 36, dtAnkylosis: 32 },
    { flexion: 37, dtFlexion: 31, extension: -33, dtExtension: 24, ankylosis: 37, dtAnkylosis: 31 },
    { flexion: 38, dtFlexion: 31, extension: -32, dtExtension: 23, ankylosis: 38, dtAnkylosis: 31 },
    { flexion: 39, dtFlexion: 30, extension: -31, dtExtension: 21, ankylosis: 39, dtAnkylosis: 30 },
    { flexion: 40, dtFlexion: 30, extension: -30, dtExtension: 20, ankylosis: 40, dtAnkylosis: 30 },
    { flexion: 41, dtFlexion: 29, extension: -29, dtExtension: 19, ankylosis: 41, dtAnkylosis: 29 },
    { flexion: 42, dtFlexion: 29, extension: -28, dtExtension: 17, ankylosis: 42, dtAnkylosis: 29 },
    { flexion: 43, dtFlexion: 28, extension: -27, dtExtension: 16, ankylosis: 43, dtAnkylosis: 28 },
    { flexion: 44, dtFlexion: 28, extension: -26, dtExtension: 15, ankylosis: 44, dtAnkylosis: 28 },
    { flexion: 45, dtFlexion: 27, extension: -25, dtExtension: 13, ankylosis: 45, dtAnkylosis: 27 },
    { flexion: 46, dtFlexion: 27, extension: -24, dtExtension: 12, ankylosis: 46, dtAnkylosis: 27 },
    { flexion: 47, dtFlexion: 26, extension: -23, dtExtension: 11, ankylosis: 47, dtAnkylosis: 26 },
    { flexion: 48, dtFlexion: 26, extension: -22, dtExtension: 9, ankylosis: 48, dtAnkylosis: 26 },
    { flexion: 49, dtFlexion: 25, extension: -21, dtExtension: 8, ankylosis: 49, dtAnkylosis: 25 },
    { flexion: 50, dtFlexion: 25, extension: -20, dtExtension: 7, ankylosis: 50, dtAnkylosis: 25 },
    { flexion: 51, dtFlexion: 24, extension: -19, dtExtension: 5, ankylosis: 51, dtAnkylosis: 24 },
    { flexion: 52, dtFlexion: 24, extension: -18, dtExtension: 4, ankylosis: 52, dtAnkylosis: 24 },
    { flexion: 53, dtFlexion: 23, extension: -17, dtExtension: 3, ankylosis: 53, dtAnkylosis: 23 },
    { flexion: 54, dtFlexion: 23, extension: -16, dtExtension: 1, ankylosis: 54, dtAnkylosis: 23 },
    { flexion: 55, dtFlexion: 22, extension: -15, dtExtension: 0, ankylosis: 55, dtAnkylosis: 22 },
    { flexion: 56, dtFlexion: 22, extension: -14, dtExtension: 0, ankylosis: 56, dtAnkylosis: 22 },
    { flexion: 57, dtFlexion: 21, extension: -13, dtExtension: 0, ankylosis: 57, dtAnkylosis: 21 },
    { flexion: 58, dtFlexion: 21, extension: -12, dtExtension: 0, ankylosis: 58, dtAnkylosis: 21 },
    { flexion: 59, dtFlexion: 20, extension: -11, dtExtension: 0, ankylosis: 59, dtAnkylosis: 20 },
    { flexion: 60, dtFlexion: 20, extension: -10, dtExtension: 0, ankylosis: 60, dtAnkylosis: 20 }
];

function lookupDTImpairment(angle, jointType, motionType) {
    let data;
    if (jointType === 'DIP') {
        data = DIPData;
    } else if (jointType === 'PIP') {
        data = PIPData;
    } else if (jointType === 'MP') {
        data = MPData;
    } else {
        throw new Error('Invalid joint type');
    }

    let dtImpairment = null;
    for (let i = 0; i < data.length; i++) {
        const row = data[i];
        if (motionType === 'flexion' && (angle <= row.flexion || row.flexion === '<-30' && angle < -30)) {
            dtImpairment = row.dtFlexion;
            break;
        } else if (motionType === 'extension' && (angle <= row.extension || row.extension === '<-70' && angle < -70)) {
            dtImpairment = row.dtExtension;
            break;
        } else if (motionType === 'ankylosis' && (angle <= row.ankylosis || row.ankylosis === '<-30' && angle < -30)) {
            dtImpairment = row.dtAnkylosis;
            break;
        }
    }

    if (dtImpairment === null) {
        throw new Error('Angle out of range');
    }

    return dtImpairment;
}

document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const angle = parseFloat(document.getElementById('angle').value);
    const jointType = document.getElementById('jointType').value;
    const motionType = document.getElementById('motionType').value;

    try {
        const result = lookupDTImpairment(angle, jointType, motionType);
        document.getElementById('result').textContent = `The DT impairment for ${jointType} joint at ${angle} degrees ${motionType} is ${result}%`;
    } catch (error) {
        document.getElementById('result').textContent = error.message;
    }
});