var React = require('react');
var ReactIntl = require('react-intl');

var LegalInformationPage = React.createClass({

  propTypes: {
    user: React.PropTypes.object,
    locales: React.PropTypes.array,
    messages: React.PropTypes.object
  },

  mixins: [
    ReactIntl.IntlMixin,
  ],

  render: function() {
    window.scrollTo(0,0);
    return (
      <div>
        <div className="container">
          <h1>{this.getIntlMessage('static.legal-page.title')}</h1>

          <h2>Allgemeine Geschäftsbedingungen</h2>

          <h3>&sect; 1 Anwendungsbereich, Angebotsbeschreibung</h3>

          <ol>
            <li>
              Folgende Allgemeine Geschäftsbedingungen (&quot;AGB&quot;) gelten für alle Leistungen und Angebote, die von der TUMitfahrer GbR beworben und erbracht werden. Entgegenstehende AGB der Vertragspartner von der TUMitfahrer GbR (im Folgenden &quot;Nutzer&quot;) sind nur dann gültig, wenn TUMitfahrer diesen ausdrücklich und schriftlich zustimmt.
            </li>

            <li>
              Die TUMitfahrer GbR stellt eine Internetplattform unter <a href="https://www.tumitfahrer.de">www.tumitfahrer.de</a> (&quot;Webseite&quot;) und eine Applikation für die Nutzung durch mobile Endgeräte (Smartphones, Tablets) zur Vermittlung von Mitfahrgelegenheiten zur Verfügung (&quot;App&quot;). Anbieter von Mitfahrgelegenheiten (&quot;Fahrer&quot;) und Suchende einer Mitfahrgelegenheit (&quot;Mitfahrer&quot;) geben ihre geplanten Strecken auf der Webseite oder dem mobilen Endgerät ein, die TUMitfahrer GbR führt schlägt Mitfahrern Fahrer vor, sofern passende Fahrten gefunden werden. Mitfahrer können die ihnen vorgeschlagenen Fahrer über die Webseite oder das mobile Endgerät verbindlich anfragen. Eine Vermittlung/ein Beförderungsvertrag kommt zustande, wenn Fahrer die jeweilige Mitfahranfrage bestätigen.
            </li>

            <li>
              Die TUMitfahrer GbR führt keine Fahrten durch und wird nicht selbst Vertragspartner eines Beförderungsvertrages. Ein Beförderungsvertrag kommt ausschließlich zwischen Fahrer und Mitfahrer zustande. Ansprüche aus dem Beförderungsvertrag entstehen ausschließlich zwischen Fahrer und Mitfahrer.
            </li>

            <li>
              Die TUMitfahrer GbR sichert nicht eine erfolgreiche Vermittlung von Mitfahrgelegenheiten zu.
            </li>

            <li>
              Die TUMitfahrer GbR behält sich das Recht vor, das Angebot jederzeit zu ändern oder einzustellen. Es wird nicht garantiert, dass das Angebot der TUMitfahrer GbR unterbrechungsfrei zur Verfügung steht.
            </li>
          </ol>

          <h3>&sect; 2 Inhalte, Anmeldung</h3>

          <ol>
            <li>
              Die auf der TUMitfahrer Plattform von Nutzern veröffentlichten Inhalte werden von der TUMitfahrer GbR nicht geprüft und stellen nicht die Meinung von TUMitfahrer GbR dar. Die TUMitfahrer GbR wird aber, soweit Hinweise auf Missbrauch oder ungesetzliche Inhalte vorliegen, gemeldete Inhalte prüfen und ggf. löschen. Mit der Veröffentlichung der Inhalte auf der Plattform erklärt der Nutzer, dass die Inhalte frei von Rechten Dritter sind und räumt der TUMitfahrer GbR ein kostenloses, unbeschränktes einfaches Nutzungsrecht an den Inhalten ein.
            </li>

            <li>
              Es können sich nur Besitzer eine gültigen E-Mail-Adresse der TU München registrieren. Ein Anspruch auf  Teilnahme besteht nicht.
            </li>

            <li>
              Jedes Mitglied hat sich selbst von der Identität seines Vertragspartners und der Korrektheit der sonstigen Daten zu überzeugen.
            </li>
          </ol>

          <h3>&sect; 3 Pflichten des Nutzers</h3>

          <ol>
            <li>
              Der Nutzer hat gegenüber anderen Nutzern, gegenüber Betreibern von Gruppen und gegenüber der TUMitfahrer GbR einen sachgerechten und rücksichtsvollen Umgang zu pflegen.
            </li>

            <li>
              Der Nutzer verpflichtet sich, im Rahmen der Anmeldung und Nutzung des Angebots der TUMitfahrer GbR wahrheitsgemäße und vollständige Angaben über seine persönlichen Daten und Verhältnisse zu machen und diese Daten aktuell zu halten. Jede Person darf sich nur einmal anmelden. Im Falle eines Ausschlusses darf sich der betroffene Nutzer nicht erneut anmelden.
            </li>

            <li>
              Nicht voll geschäftsfähige Nutzer benötigen für die Nutzung der TUMitfahrer-Plattform die Einwilligung ihrer gesetzlichen Vertreter. Diese Einwilligung ist auf Verlangen schriftlich nachzuweisen.
            </li>

            <li>
              Der Nutzer hat die Zugriffsmöglichkeiten auf die TUMitfahrer App Plattform nicht missbräuchlich zu nutzen und hat rechtswidrige Handlungen zu unterlassen. Der Nutzer hat seine Zugangsdaten vor dem Zugriff durch Dritte zu schützen und sie diesen nicht zugänglich machen. Der Nutzer darf die Plattform nicht zur Verfolgung gewerblicher Zwecke verwenden.
            </li>

            <li>
              Das kommerzielle Anbieten von Mitfahrgelegenheiten ist nicht gestattet.
            </li>

            <li>
              Die Einhaltung einschlägiger anwendbarer gesetzlicher Regelungen, wie etwa der Straßenverkehrsordnung (StVO) oder des Personenbeförderungsgesetzes (PeBefG) obliegt dem Fahrer.
            </li>
          </ol>

          <h3>&sect; 4 Erhebung, Speicherung und Weitergabe von Daten</h3>

          <p>
            Es gilt die Datenschutzerklärung der TUMitfahrer GbR.
          </p>

          <h3>&sect; 5 Bewertungssystem</h3>

          <p>
            Die TUMitfahrer GbR ermöglicht es Nutzern, sich nach der Durchführung eines Beförderungsvertrages gegenseitig zu bewerten. Die Bewertungen werden von TUMitfahrer App nicht überprüft. Nutzer sind verpflichtet, in den abgegebenen Bewertungen ausschließlich wahrheitsgemäße Angaben zu machen und gesetzliche Bestimmungen einzuhalten.
          </p>

          <h3>&sect; 6 Rechte der TUMitfahrer GbR</h3>

          <ol>
            <li>
              Bei einem Verstoß gegen diese AGB oder dem begründeten Verdacht eines Verstoßes durch einen Nutzer ist die TUMitfahrer GbR berechtigt, den jeweiligen Nutzer auszuschließen und gegebenenfalls die von ihm verwendeten bzw. an ihn adressierten Inhalte unverzüglich zu löschen.
            </li>

            <li>
              Die TUMitfahrer GbR ist jederzeit berechtigt, Angebote und Gesuche der Nutzer oder Nutzerprofile von der Plattform zu entfernen.
            </li>
          </ol>

          <h3>&sect; 7 Kündigung des Nutzerkontos</h3>

          <p>
            Der Nutzer kann jederzeit die Löschung seines Profils über <a href="mailto:info@tumitfahrer.de">info@tumitfahrer.de</a> veranlassen.
          </p>

          <h3>&sect; 8 Haftung der TUMitfahrer GbR</h3>

          <ol>
            <li>
              Die Haftung für Lebens-, Körper- und Gesundheitsschäden, die auf einer fahrlässigen Pflichtverletzung der TUMitfahrer GbR oder ihrer Vertreter oder Erfüllungsgehilfen beruhen, wird genauso wie für sonstige Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung der TUMitfahrer GbR bzw. von Vertretern oder Erfüllungsgehilfen der TUMitfahrer GbR beruhen, nicht ausgeschlossen. Weitergehende Haftung ist ausgeschlossen.
            </li>

            <li>
              Insbesondere übernimmt die TUMitfahrer GbR keine Haftung für Schäden, die daraus entstehen, dass es nicht zu einer Vermittlung einer Mitfahrgelegenheit kommt. Es besteht kein Anspruch auf Abschluss eines Beförderungsvertrages.
            </li>

            <li>
              Auch übernimmt die TUMitfahrer GbR keine Haftung für Schäden, die sich aus der von der TUMitfahrer GbR vermittelten Mitfahrgelegenheit ergeben. Dieser Haftungsausschluss gilt für Schäden jeder Art, insbesondere für entgangenen Gewinn sowie indirekte Schäden, und unabhängig davon, ob diese dem Nutzer oder auch Dritten entstehen.
            </li>
          </ol>

          <h3>&sect; 9 Gerichtsstand</h3>

          <p>
            Ist der Vertragspartner ein Kaufmann im Sinne des Handelsrechts, eine juristische Person des öffentlichen Rechts oder ein öffentlich-rechtliches Sondervermögen, dann ist der Sitz der TUMitfahrer GbR (München) der Gerichtsstand. Dasselbe gilt, wenn der Nutzer keinen allgemeinen Gerichtsstand oder Wohnsitz in Deutschland hat oder der gewöhnliche Aufenthaltsort zum Zeitpunkt der Klageerhebung nicht bekannt ist.
          </p>

          <h3>&sect; 10 Änderung der AGB</h3>

          <ol>
            <li>
              Änderungen der AGB werden gegenüber dem Nutzer nur durch seine Einwilligung wirksam. Diese Einwilligung gilt als erteilt, wenn die TUMitfahrer GbR die geänderte AGB dem Nutzer per E-Mail zuleitet und er nicht innerhalb eines Monats widerspricht und er auf diese Rechtsfolge in der E-Mail deutlich sichtbar hingewiesen wird.
            </li>
          </ol>


          <h2>Datenschutzerklärung</h2>

          <h3>1. Allgemeines</h3>

          <p>
            Personenbezogene Daten, die Sie über die TUMitfahrer-Webseite oder in der App eingeben, werden von TUMitfahrer GbR erhoben, genutzt und verarbeitet. Diese ist verantwortliche Stelle im Sinne des Bundesdatenschutzgesetzes.
          </p>

          <h3>2. Registrierung auf unserer Webseite / in der App</h3>

          <p>
            Zur Nutzung unserer Webseite müssen Sie sich zunächst mit Ihrer E-Mailadresse und einem frei zu wählenden Benutzernamen und Passwort auf unserer Webseite registrieren. Bitte achten Sie sorgfältig auf die Geheimhaltung Ihres Passworts, um einem Missbrauch vorzubeugen.
          </p>

          <p>
            Um Ihnen die Nutzung der Webseite zu ermöglichen, werden die von Ihrem Computer mitgeteilte IP-Nummer sowie der Zeitraum der Nutzung gespeichert. Diese Daten werden nach Wegfall des Erhebungszwecks wieder gelöscht.
          </p>

          <p>
            Die Daten werden dabei verschlüsselt übertragen. Hierzu wird das HTTPS-Protokoll verwendet.
          </p>

          <p>
            Auf Verlangen gibt Ihnen die TUMitfahrer GbR gerne Auskunft über die Daten, die unter Ihrem Benutzernamen gespeichert sind. Schreiben Sie uns hierzu an TUMitfahrer App, Lehrstuhl für Datenverarbeitung, Arcisstraße 21, 80333 München.
          </p>

          <h3>3. Art, Umfang und Zweck der Datenverwendung, Einwilligung des Nutzers</h3>

          <p>
            Die von Ihnen im Rahmen Ihrer Registrierung angegebenen Daten werden für die vertraglich vereinbarten Zwecke, d. h. zur Kennzeichnung Ihrer Mitfahrgelegenheiten, Ermöglichung der Nutzung der Webseite und der App. Darüber hinaus werden die Daten zu Informations- und Werbezwecken nur dann genutzt, wenn Sie hierzu ihre Einwilligung erteilen. Die Nutzung der Daten zu Werbezwecken kann insbesondere darin bestehen, dass Werbung eingeblendet wird, die für den Nutzer relevant ist. Die Daten werden dabei elektronisch gespeichert.
          </p>

          <p>
            Die Einwilligung zur Verwendung ihrer Daten erfolgt auf freiwilliger Basis auf unserer Internetseite. Sie haben daher das Recht, diese Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen.
          </p>

          <p>
            Bei der Registrierung müssen folgende Felder ausgefüllt werden: Vorname, Nachname E-Mail-Adresse, sowie die Fakultät. Von anderen Mitgliedern sind folgende Daten einsehbar: Vorname, Nachname, Emailadresse und Fakultät.
          </p>

          <h3>4. Dritte</h3>

          <p>
            Die TUMitfahrer GbR kann gesetzlich zur Weitergabe der Daten an Dritte, z. B. Ermittlungsbehörden, verpflichtet sein. Außer in dem vorgenannten Umfang werden Ihre personenbezogenen Daten nicht an Dritte weitergegeben.
          </p>

          <h3>5. Löschung oder Sperrung der Daten</h3>

          <p>
            Sie können Ihr Konto jederzeit löschen. Ihre Daten, die Sie bei der Registrierung für unsere Webseite angegeben haben, bleiben so lange gespeichert, bis Sie Ihre Registrierung bei uns aufheben. Dann werden die Daten gelöscht, es sei denn es bestehen gesetzliche Aufbewahrungspflichten. Im letzten Fall werden die Daten für eine weitere Verwendung gesperrt.
          </p>

          <h3>6. Verwendung von Facebook Social Plugins</h3>

          <p>
            Unser Internetauftritt verwendet Social Plugins (Plugins) des sozialen Netzwerks facebook.com, welches von der Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA betrieben wird (Facebook). Die Plugins sind an den Facebook-Logos erkennbar (weißes &quot;f&quot; auf blauer Kachel oder ein &quot;Daumen hoch&quot;-Zeichen).
          </p>

          <p>
            Bei der Nutzung von Webseiten der TUMitfahrer GbR, die ein solches Plugin enthalten, baut Ihr Browser eine Verbindung mit den Servern von Facebook auf. Wenn Sie auf Facebook eingeloggt sind, ordnet Facebook die Information über die Nutzung unserer Webseite Ihrem Facebook-Konto zu und bindet den Plugin-Inhalt in die Webseite ein. Auch wenn Sie kein Mitglied von Facebook sind, besteht die Möglichkeit, dass Facebook Ihre IP-Adresse in Erfahrung bringt und speichert. Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch Facebook sowie Ihre diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz der Privatsphäre sind den Datenschutzhinweisen von Facebook zu entnehmen: <a href="https://www.facebook.com/policy.php">www.facebook.com/policy.php</a>
          </p>

          <h3>7. Änderung der Datenschutzhinweise</h3>

          <p>
            Die TUMitfahrer GbR behält sich vor, diese Datenschutzhinweise zu aktualisieren. Im Falle von Änderungen, die für Sie nachteilig sein könnten, wird die TUMitfahrer GbR Sie mit angemessener Frist hierüber informieren.
          </p>

        </div>
      </div>
    );
  }
});

module.exports = LegalInformationPage;
