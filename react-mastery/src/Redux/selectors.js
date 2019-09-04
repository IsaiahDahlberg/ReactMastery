export const getSheetMusicState = store => store.sheetMusic;

export const getsheetMusicList = store =>
    getSheetMusicState(store) ? getSheetMusicState(store).sheetMusic : [];

export const getAddPanelToggleStatus = store => store.showAddPanel;