import Header from "./header/header.tsx";
export default class Main {
    public setStyle() {
        return {
            body: {
                backgroundColor: "#777"
            }
        };
    }

    public getContentStyle() {
        return {
            mainBackGroundColor: "#d5d5d5",
            fontFamily: "'Lusitana', sans-serif",
            paddingTop: 10,
            paddingRight: 10,
            paddingLeft: 10,
            borderRadius: 10
        }
    }
    public render(props: any) {
        let header = new Header();

        return (
            <>
                <link href="https://fonts.cdnfonts.com/css/lusitana" rel="stylesheet" />
                <link href="main.css" rel="stylesheet" />
                <div style={this.setStyle().body}>
                    {header.render()}
                    {props.content}
                </div>
            </>
        );
    }
}