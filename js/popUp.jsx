/** Application popup page component. */
var PagePopUpContent = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Popup</h2>
                <p>I have an id of "popup" on my page container and only look like a dialog because the link to me had a <code>data-rel="dialog"</code> attribute which gives me this inset look and a <code>data-transition="pop"</code> attribute to change the transition to pop. Without this, I'd be styled as a normal page.</p>
                <p>
                    <JQueryMobileButton
                        href={"#one"}
                        data-rel={"back"}
                        className={"ui-btn ui-shadow ui-corner-all ui-btn-inline ui-icon-back ui-btn-icon-left"}
                        children={'Back to page "one"'} />
                </p>
            </div>
        );
    }
});