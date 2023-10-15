import Main from "../template/main.tsx";

export default class Home extends Main {
    public setStyleContent() {
        return {
            mainArea: {
                height: "70%"
            }
        };
    }

    public renderContent(props: any) {
        return (
            <>
                <div style={this.setStyleContent().mainArea}>
                    this is home.
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