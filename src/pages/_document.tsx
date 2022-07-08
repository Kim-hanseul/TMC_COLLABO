import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return{ ... initialProps}
    }
    render(){
        return(
            <Html>
                <Head/>
                <title>TMC</title>
                <meta charSet="utf-8"></meta>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = 'anonymous'/>
                <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Lobster&family=Pacifico&family=Press+Start+2P&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet"></link>
                <script src="https://accounts.google.com/gsi/client" async defer></script>
                <meta
                    name="viewport"
                    content="width=device-width, user-scalable=no,
                    initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
export default MyDocument