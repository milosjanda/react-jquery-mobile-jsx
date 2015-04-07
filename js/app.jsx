/**
 * jQuery Mobile React Example
 *
 * Main application script.
 *
 * Component structure:
 *
 * - App
 *   |-- JQueryMobilePage (one)
 *   |   |-- JQueryMobileHeader
 *   |   |-- JQueryMobileContent
 *   |   |   |-- PageOneContent
 *   |   |       |-- JQueryMobileButton
 *   |   |-- JQueryMobileFooter
 *   |-- JQueryMobilePage (two)
 *   |   |-- JQueryMobileHeader
 *   |   |-- JQueryMobileContent
 *   |   |   |-- PageTwoContent
 *   |   |       |-- JQueryMobileButton
 *   |   |-- JQueryMobileFooter
 *   |-- JQueryMobilePage (popup)
 *       |-- JQueryMobileHeader
 *       |-- JQueryMobileContent
 *       |   |-- PagePopUpContent
 *       |       |-- JQueryMobileButton
 *       |-- JQueryMobileFooter
 */

 /* global document, React */

'use strict';

/** Main application component. */
var App = React.createClass({
    componentDidMount: function() {
        $.mobile.initializePage();
    },
    render: function() {
        return (
            <div className="app">
                <JQueryMobilePage id={'one'}>
                    <PageOneContent />
                </JQueryMobilePage>
                <JQueryMobilePage id={'two'}>
                    <PageTwoContent />
                </JQueryMobilePage>
                <JQueryMobilePage id={'popup'} headerTheme={'b'}>
                    <PagePopUpContent />
                </JQueryMobilePage>
            </div>
        );
    }
});


/** jQuery Mobile page component. */
var JQueryMobilePage = React.createClass({
    getDefaultProps: function() {
        return {'data-role':'page', 'data-theme':'a', headerTheme:'a'};
    },

    render: function() {
        return (
            <div {...this.props}>
                <JQueryMobileHeader title={'Page ' + this.props.id} headerTheme={this.props.headerTheme} />
                <JQueryMobileContent>{this.props.children}</JQueryMobileContent>
                <JQueryMobileFooter />
            </div>
        );
    }
});


/** jQuery Mobile page content component. */
var JQueryMobileContent = React.createClass({
    render: function() {
        return (
            <div role="main" className="ui-content">
                {this.props.children}
            </div>
        );
    }
});


/** jQuery Mobile header component. */
var JQueryMobileHeader = React.createClass({
    render: function() {
        return (
            <div data-role="header" data-theme={this.props.headerTheme}>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
});


/** jQuery Mobile footer component. */
var JQueryMobileFooter = React.createClass({
    render: function() {
        return (
            <div data-role="footer">
                <h4>Page footer</h4>
            </div>
        );
    }
});


/** jQuery Mobile button component. */
var JQueryMobileButton = React.createClass({
    getDefaultProps: function() {
        return {className:'ui-btn ui-shadow ui-corner-all'};
    },
    render: function() {
        return (
            <a href={this.props.href}
                data-rel={this.props['data-rel']}
                data-transition={this.props['data-transition']}
                data-direction={this.props['data-direction']}
                className={this.props.className}>

                {this.props.children}
            </a>
        );
    }
});

