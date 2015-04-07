/** Application page one component. */
var PageOneContent = React.createClass({
  render: function() {
    return (
        <div>
            <h2>One</h2>
            <p>I have an <code>id</code> of "one" on my page container. I'm first in the source order so I'm shown when the page loads.</p>
            <p>This is a multi-page boilerplate template that you can copy to build your first jQuery Mobile page. This template contains multiple "page" containers inside, unlike a single page template that has just one page within it.</p>
            <p>Just view the source and copy the code to get started. All the CSS and JS is linked to the jQuery CDN versions so this is super easy to set up. Remember to include a meta viewport tag in the head to set the zoom level.</p>
            <p>You link to internal pages by referring to the <code>id</code> of the page you want to show. For example, to <a href="#two">link</a> to the page with an <code>id</code> of "two", my link would have a <code>href="#two"</code> in the code.</p>

            <h3>Show internal pages:</h3>
            <p>
                <JQueryMobileButton
                    href={"#two"}
                    children={'Show page "two"'}>
                </JQueryMobileButton>
            </p>
            <p>
                <JQueryMobileButton
                    href={"#popup"}
                    data-rel={"dialog"}
                    data-transition={"pop"}
                    children={'Show page "popup" (as a dialog)'}>
                </JQueryMobileButton>
            </p>
        </div>
    );
  }
});
