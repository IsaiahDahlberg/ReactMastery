export const getSheetMusicState = store => store.sheetMusic;

export const getsheetMusicList = store =>
    getSheetMusicState(store) ? getSheetMusicState(store).allIds : [];
