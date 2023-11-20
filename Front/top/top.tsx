import Main from "../template/main.tsx";

export default class Top extends Main {
    public setStyleContent() {
        const mainStyle = super.getContentStyle();
        return {
            mainArea: {
                height: "70%",
                fontFamily: mainStyle.fontFamily,
                color: mainStyle.color,
                paddingTop: mainStyle.paddingTop,
                paddingLeft: mainStyle.paddingLeft,
                paddingRight: mainStyle.paddingRight,
            },
            title: {
                marginTop: 0
            },
            sentenceArea: {
                marginLeft: 30
            },
            sentence: {
                fontSize: 32,
                color: "#202020",
                lineHeight: "80px"
            },
            article: {
                display: "flex"
            },
            image: {
                height: "30%",
                width: "30%",
                marginLeft: 10,
                marginBottom: 10,
            },
            intro: {
                backgroundColor: mainStyle.mainBackGroundColor,
                borderRadius: mainStyle.borderRadius,
                width: "80%"
            }
        };
    }

    public renderContent(props: any) {
        return (
            <>
                <div style={this.setStyleContent().mainArea}>
                    <div style={this.setStyleContent().intro}>
                        <h1 style={this.setStyleContent().title}>About Masa</h1>
                        <div style={this.setStyleContent().article}>
                            <img src={"ss.png"} style={this.setStyleContent().image}/>
                            <ul style={this.setStyleContent().sentenceArea}>
                                <li style={this.setStyleContent().sentence}>
                                    Web Engineer.
                                </li>
                                <li style={this.setStyleContent().sentence}>
                                    Project Manager.
                                </li>
                                <li style={this.setStyleContent().sentence}>
                                    Retail Manager.
                                </li>
                                <li style={this.setStyleContent().sentence}>
                                    Free Lance.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    public render(props: any) {
        return super.render({
            content: this.renderContent(props)
        });
    }
}