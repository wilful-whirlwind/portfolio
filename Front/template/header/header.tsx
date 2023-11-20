export default class Header {

    public setStyles() {
        return {
            header: {
                display: "flex",
                backgroundColor: "#d5d5d5",
                color:"#484848",
                height: "15%",
                width: "100%",
                fontFamily: "'Lusitana', sans-serif",
                fontSize: "20px",
                position: "relative",
                marginBottom: 20,
                borderRadius: 10
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
                fontSize: 84,
                verticalAlign: "bottom"
            }
        }
    }

    public render(props: any) {

        return (
            <>
                <div style={this.setStyles().header}>
                    <h1 style={this.setStyles().title}>
                        Masa's Portfolio
                    </h1>
                    <ul style={this.setStyles().header_button}>
                        <li style={this.setStyles().header_buttons}>
                            Top
                        </li>
                        <li style={this.setStyles().header_buttons}>
                            About Me
                        </li>
                        <li style={this.setStyles().header_buttons}>
                            Works
                        </li>
                        <li style={this.setStyles().header_buttons}>
                            Contact
                        </li>
                        <li style={this.setStyles().header_buttons}>
                            Blog
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}