import Main from "../template/main.tsx";

export default class Home extends Main {
    public setStyleContent() {
        const mainStyle = super.getContentStyle();
        return {
            mainArea: {
                height: "70%",
                backgroundColor: mainStyle.mainBackGroundColor,
                fontFamily: mainStyle.fontFamily,
                paddingTop: mainStyle.paddingTop,
                paddingLeft: mainStyle.paddingLeft,
                paddingRight: mainStyle.paddingRight,
                borderRadius: mainStyle.borderRadius
            },
            title: {
                marginTop: 0
            },
            sentence: {
                fontSize: 20
            }
        };
    }

    public renderContent(props: any) {
        return (
            <>
                <div style={this.setStyleContent().mainArea}>
                    <div>
                        <h1 style={this.setStyleContent().title}>About Masa</h1>
                        <p style={this.setStyleContent().sentence}>
                            Masa is Web Engineer in Japan.
                        </p>
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