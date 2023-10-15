export default class Header {

    public setStyles() {
        return {
            header: {
                display: "flex",
                backgroundColor: "#bbb",
                color:"#353535",
                height: "15%",
                width: "100%",
                fontFamily: "'Teko', sans-serif",
                fontSize: "20px",
                position: "relative"
            },
            header_button: {
                display: "flex",
                paddingLeft: 0,
                justifyContent: "flex-end",
                alignItems: "flex-end",
                position: "absolute",
                right: 0,
                bottom: 0,
                marginBottom: 0,
                paddingBottom: 0
            },
            header_buttons: {
                listStyle: "none",
                padding: "8px 25px",
                border: "1px solid #eeeeee",
            },
            title: {
                marginLeft: 5,
                marginTop: 0,
                fontSize: 96,
                verticalAlign: "bottom"
            }
        }
    }

    public render(props: any) {

        return (
            <>
                <div style={this.setStyles().header}>
                    <h1 style={this.setStyles().title}>
                        masa's portfolio
                    </h1>
                    <ul style={this.setStyles().header_button}>
                        <li style={this.setStyles().header_buttons}>
                            top
                        </li>
                        <li style={this.setStyles().header_buttons}>
                            about me
                        </li>
                        <li style={this.setStyles().header_buttons}>
                            works
                        </li>
                        <li style={this.setStyles().header_buttons}>
                            contact
                        </li>
                        <li style={this.setStyles().header_buttons}>
                            blog
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}