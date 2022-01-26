angular.module('app.templates', []).run(['$templateCache', function($templateCache) {
    $templateCache.put('modules/app/directives/componentError/componentError.html', '<div class="error_text" w-i18n="error.crashed"></div>');
    $templateCache.put('modules/app/templates/main.html', '<div class="main-content movable"><div class="content"><ui-view name="mainContent" class="ui-view"></ui-view></div></div>');
    $templateCache.put('modules/wrapperForReact/templates/wrapperForReact.html', '<div class="movable main-content"><w-wrapper-for-react></w-wrapper-for-react></div>');
    $templateCache.put('themeConfig/candle-style.hbs', 'body.trade .dex-layout__tradehistory w-tabs .smart-table__row.sell .smart-table__cell[data-column-id=\'type\' { color: red; } body.trade .dex-layout__tradehistory w-tabs .smart-table__row.sell .smart-table__cell[data-column-id=\'status\'], w-dex-trade-history .order-side.sell, w-create-order .create-order .body .making-order.sell .areas .area.sell');
}]);