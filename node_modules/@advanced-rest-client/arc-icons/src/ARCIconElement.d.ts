import { LitElement } from 'lit-element';

export declare type Icons = 'accountCircle' | 'accountOutline' | 'addCircleOutline' | 'add' | 'api' | 'arcIcon' | 'arcIconArrows' | 'archive' | 'archiveOutline' | 'arrowBack' | 'arrowDropDown' | 'arrowDropUp' | 'assignment' | 'bugReport' | 'cached' | 'chevronLeft' | 'chevronRight' | 'cancel' | 'clear' | 'clearAll' | 'close' | 'cloudDownload' | 'cloudOutline' | 'code' | 'collectionsBookmark' | 'insertComment' | 'contentCopy' | 'deleteIcon' | 'deleteOutline' | 'desktopWindows' | 'done' | 'dragHandle' | 'driveColor' | 'drive' | 'edit' | 'error' | 'expandLess' | 'expandMore' | 'exportVariant' | 'fileDownload' | 'filterList' | 'folderShared' | 'help' | 'helpOutline' | 'history' | 'home' | 'importExport' | 'info' | 'infoOutline' | 'insertDriveFile' | 'keyboardArrowDown' | 'keyboardArrowUp' | 'keyboardArrowRight' | 'list' | 'markdown' | 'menu' | 'message' | 'modeEdit' | 'domainModel' | 'domainModule' | 'moreVert' | 'newReleases' | 'notifications' | 'notificationsActive' | 'openInNew' | 'ramlR' | 'rateReview' | 'refresh' | 'remove' | 'removeCircleOutline' | 'spellcheck' | 'sentimentVeryDissatisfied' | 'sentimentNeutral' | 'save' | 'saveAlt' | 'search' | 'selectAll' | 'send' | 'settings' | 'shield' | 'shortText' | 'star' | 'starBorder' | 'toggleOff' | 'toggleOn' | 'viewColumn' | 'viewList' | 'visibility' | 'visibilityOff' | 'warning' | 'wrapText' | 'zoomIn';
declare class ARCIconElement extends LitElement {
  /**
   * An icon to be rendered from the ApiIcons library.
   * When incorrect icon is referenced nothing is rendered.
   * @attribute
   */
  icon: Icons;
  /**
   * True when the icon was found and is rendered.
   */
  get hasIcon(): boolean;
}

export {ARCIconElement};
