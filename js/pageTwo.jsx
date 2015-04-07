/** Application page two component. */
var PageTwoContent = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Two</h2>
                <p>I have an id of "two" on my page container. I'm the second page container in this multi-page template.</p>
                <p>Notice that the theme is different for this page because we've added a few <code>data-theme</code> swatch assigments here to show off how flexible it is. You can add any content or widget to these pages, but we're keeping these simple.</p>

                <p>
                    <JQueryMobileButton
                        href={'#one'}
                        data-direction={'reverse'}
                        children={'Back to page "one"'} />
                </p>
            </div>
        );
    }
});
