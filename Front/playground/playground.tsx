import Main from "../template/main.tsx";

export default class Playground extends Main {
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
                marginLeft: 10,
                marginBottom: 10,
                width: "100%",
            },
            imgLink: {
                width: "30%",
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
                        <h1 style={this.setStyleContent().title}>Playground</h1>
                        <div>
                            <div>
                                <h2>
                                    Mail Open Rate Culculator
                                </h2>
                                <div style={this.setStyleContent().article}>
                                    <a href="https://www.google.co.jp/" style={this.setStyleContent().imgLink}>
                                        <img src={"open_rate.svg"} style={this.setStyleContent().image} />
                                    </a>
                                    <p>
                                        メールの開封率計算ツールです。
                                    </p>
                                </div>
                            </div>
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