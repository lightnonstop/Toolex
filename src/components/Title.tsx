import { Helmet } from "react-helmet"
interface TitleProps {
    label: string;
}
function Title({ label }: TitleProps) {
  return (
    <Helmet>
        <title>Toolex | {label}</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
    </Helmet>
  )
}
export default Title