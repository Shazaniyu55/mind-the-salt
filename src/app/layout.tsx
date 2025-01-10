import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Mind The Salt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
              <link rel="icon" href="/images/logo.png" type="image/png" />
      <body className={roboto.className}>{children}</body>

    </html>
  );
}