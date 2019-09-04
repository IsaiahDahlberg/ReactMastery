export const getSheetMusicState = store => store.sheetMusic;

export const getsheetMusicList = store =>
    getSheetMusicState(store) ? getSheetMusicState(store).sheetMusic : [];

export const getAddPanelState = store => store.AddPanel;

export const getAddPanelToggleStatus = store =>
    getAddPanelState(store) ? getAddPanelState(store).showAddPanel : false;