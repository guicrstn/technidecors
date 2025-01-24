import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Mentions Légales</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">INFORMATIONS ÉDITORIALES</h2>
          <p>
            <strong>Site :</strong> www.technidecors.com
          </p>
          <p>
            <strong>Propriétaire :</strong> GC Informatik
          </p>
          <p>
            <strong>Adresse du propriétaire :</strong> 255 route de talour, 01100 MARTIGNAT
          </p>
          <p>
            <strong>N° de téléphone du propriétaire :</strong> 06.07.41.31.11
          </p>
          <p>
            <strong>Responsable de publication :</strong> Guillaume CRISTINI – contact@gcinformatik.fr
          </p>
          <p>
            <strong>Webmaster :</strong> Guillaume CRISTINI – contact@gcinformatik.fr
          </p>
          <p>
            <strong>Créateur du site :</strong> GC Informatik
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">NOUS CONTACTER</h2>
          <p>Pour toute question ou demande d&apos;information, veuillez nous contacter à :</p>
          <p>Email : contact@gcinformatik.fr</p>
          <p>Téléphone : 06.07.41.31.11</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">PRESTATAIRE D&apos;HÉBERGEMENT</h2>
          <p>Le site www.technidecors.com est hébergé par OVH.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">CONDITIONS GÉNÉRALES D&apos;UTILISATION DU SITE</h2>
          <p>
            L&apos;utilisation du site www.technidecors.com implique l&apos;acceptation pleine et entière des conditions
            générales d&apos;utilisation décrites ci-après. Ces conditions d&apos;utilisation sont susceptibles
            d&apos;être modifiées ou complétées à tout moment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">LIMITATIONS DE RESPONSABILITÉS</h2>
          <p>
            GC Informatik ne pourra être tenue responsable des dommages directs et indirects causés au matériel de
            l&apos;utilisateur, lors de l&apos;accès au site www.technidecors.com.
          </p>
          <p>
            GC Informatik décline toute responsabilité quant à l&apos;utilisation qui pourrait être faite des
            informations et contenus présents sur www.technidecors.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">PROPRIÉTÉ INTELLECTUELLE</h2>
          <p>
            Tout le contenu du présent site, incluant, de façon non limitative, les graphismes, images, textes, vidéos,
            animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de GC
            Informatik à l&apos;exception des marques, logos ou contenus appartenant à d&apos;autres sociétés
            partenaires ou auteurs.
          </p>
          <p>
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle,
            de ces différents éléments est strictement interdite sans l&apos;accord exprès par écrit de GC Informatik.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">DONNÉES PERSONNELLES</h2>
          <p>
            De manière générale, vous n&apos;êtes pas tenu de nous communiquer vos données personnelles lorsque vous
            visitez notre site Internet www.technidecors.com.
          </p>
          <p>
            Cependant, ce principe comporte certaines exceptions. En effet, pour certains services proposés par notre
            site, vous pouvez être amenés à nous communiquer certaines données telles que : votre nom, votre fonction,
            le nom de votre société, votre adresse électronique, et votre numéro de téléphone. Tel est le cas lorsque
            vous remplissez le formulaire qui vous est proposé en ligne, dans la rubrique « contact ».
          </p>
          <p>
            Dans tous les cas, vous pouvez refuser de fournir vos données personnelles. Dans ce cas, vous ne pourrez pas
            utiliser les services du site, notamment celui de solliciter des renseignements sur notre société, ou de
            recevoir les lettres d&apos;information.
          </p>
          <p>
            Enfin, nous pouvons collecter de manière automatique certaines informations vous concernant lors d&apos;une
            simple navigation sur notre site Internet, notamment : des informations concernant l&apos;utilisation de
            notre site, comme les zones que vous visitez et les services auxquels vous accédez, votre adresse IP, le
            type de votre navigateur, vos temps d&apos;accès.
          </p>
          <p>
            De telles informations sont utilisées exclusivement à des fins de statistiques internes, de manière à
            améliorer la qualité des services qui vous sont proposés. Les bases de données sont protégées par les
            dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la
            protection juridique des bases de données.
          </p>
        </section>
      </div>
    </div>
  )
}

