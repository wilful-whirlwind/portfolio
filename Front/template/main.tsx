import Header from "./header/header.tsx";
export default class Main {
    public setStyle() {
        return {
            body: {
                backgroundColor: "#777"
            }
        };
    }
    public render(props: any) {
        let header = new Header();

        return (
            <>
                <link href="https://fonts.googleapis.com/css?family=Teko" rel="stylesheet" />
                <link href="main.css" rel="stylesheet" />
                <div style={this.setStyle().body}>
                    {header.render()}
                    {props.content}
                </div>
            </>
        );
    }
}