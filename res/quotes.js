 const quotes = {
     happiness: [
    {
        "day": "1-jan",
        "author": "Emil Rittershaus",
        "message": "Im Glücklichmachen liegt das Glücklichsein."
    },
    {
        "day": "2-jan",
        "author": "Joseph Addison",
        "message": "Um im Leben glücklich zu sein, brauchen wir etwas um zu arbeiten, etwas zu lieben und etwas, auf das wir hoffen können."
    },
    {
        "day": "3-jan",
        "author": "Pedro Calderón de la Barca",
        "message": "Alle Schätze der Welt wiegen das Glück nicht auf, geliebt zu werden."
    },
    {
        "day": "4-jan",
        "author": "Jules Michelet",
        "message": "In einer Welt, in der alles schwankt, bedarf es eines festen Punktes, auf den man sich stützen kann. Dieser Punkt ist der häusliche Herd; der Herd ist aber kein fester Stein, wie die Leute sagen, sondern das Herz, und zwar das Herz einer Frau."
    },
    {
        "day": "5-jan",
        "author": "Otto von Leixner",
        "message": "Das Lachen einer warmherzigen Mutter ist ein Klang, der durch ein langes Menschenleben forttönen kann."
    },
    {
        "day": "6-jan",
        "author": "Fjodor Ivanowitsch Schaljapin",
        "message": "Liebe bedeutet immer Glück, wem diese Liebe auch gehören mag."
    },
    {
        "day": "7-jan",
        "author": "Friedrich von Matthisson",
        "message": "Wo Liebe, Freundschaft, Weisheit und Natur in schöner Eintracht wohnen, ist der Himmel."
    },
    {
        "day": "8-jan",
        "author": "Joseph Joubert",
        "message": "Die Hoffnung ist eine Anleihe auf das Glück."
    },
    {
        "day": "9-jan",
        "author": "Marie von Ebner-Eschenbach",
        "message": "Man muss das Glück teilen, um es zu multiplizieren."
    },
    {
        "day": "10-jan",
        "author": "Luc de Clapiers Vauvenargues",
        "message": "Aktivität bringt mehr Glück als Klugheit."
    },
    {
        "day": "11-jan",
        "author": "Friedrich von Schiller",
        "message": "Es gibt Augenblicke im Leben, wo wir aufgelegt sind, jede Blume und jenes entlegen Gestirn an den Busen zu Drücken – ein Umarmen der ganzen Natur gleich, gleich unserer Geliebten. Der Mensch, der es so weit gebracht hat, alle Schönheit, Größe, Vortrefflichkeit im Kleinen und Großen der Natur aufzulesen und zu dieser Mannigfaltigkeit die große Einheit zu finden, ist der Gottheit schon sehr viel nähergerückt. Die ganze Schöpfung zerfließt in seine Persöhnlichkeit."
    },
    {
        "day": "12-jan",
        "author": "Russisches Sprichwort",
        "message": "Nicht im Glück liegt die Freude, sondern in der Freude liegt das Glück."
    },
    {
        "day": "13-jan",
        "author": "Sully Prudhomme",
        "message": "Die Freude ist nur ein Waffenstillstand für das Leiden. Glück könnte sein, sich dessen nicht bewusst zu sein."
    },
    {
        "day": "14-jan",
        "author": "Wilhelm Busch",
        "message": "Will das Glück nach seinem Sinn dir was Gutes schenken, sage Dank und nimm es hin ohne viel Bedenken. Jede Gabe sei begrüßt, doch vor allen Dingen: Das, worum du dich bemühst, möge dir gelingen."
    },
    {
        "day": "15-jan",
        "author": "Marcus Tullius Cicero",
        "message": "Gibt es etwas Beglückenderes, als einen Menschen zu kennen, mit dem man sprechen kann wie mit sich selbst?"
    },
    {
        "day": "16-jan",
        "author": "August Heinrich Hoffmann von Fallerleben",
        "message": "O glücklich, wer viel tut und immer noch Zeit übrig hat, für andere zu tun, die Langeweile nur bei den anderen kennt und seine Zeit so verwerten, das jede Zeit in seinem Leben wird zu einer Freud- und Segenspenderin."
    },
    {
        "day": "17-jan",
        "author": "Arthur Schopenhauer",
        "message": "Die Heiterkeit allein ist gleichsam die bare Münze des Glückes und nicht, wie alles andere, bloß der Bankzettel; weil nur sie unmittelbar in der Gegenwart glückt."
    },
    {
        "day": "18-jan",
        "author": "Johann Heinrich Pestalozzi",
        "message": "Mut, das ist ganz sicher; gehört am notwendigsten von allen menschlichen Eigenschaft zum Glück."
    },
    {
        "day": "19-jan",
        "author": "Joseph Victor von Scheffel",
        "message": "Friede im Gemüte, das Leben sonnig erhellt: wahre Herzensgüte überwindet die Welt."
    },
    {
        "day": "20-jan",
        "author": "Epikur",
        "message": "Von allen Dingen, die das Glück des Lebens ausmachen, schenkt die Freundschaft uns den größten Reichtum."
    },
    {
        "day": "21-jan",
        "author": "Elbert Hubbard",
        "message": "Kummer lässt sich allein tragen. Für das Glück sind zwei Menschen erforderlich."
    },
    {
        "day": "22-jan",
        "author": "Theodor Fontane",
        "message": "Gott, was ist Glück? Eine Grießsuppe, eine Schlafstelle und keine körperlichen Schmerzen – das ist schon viel."
    },
    {
        "day": "23-jan",
        "author": "Oscar Blumenthal",
        "message": "Wenn ganz ohne Sorgen die Tage verschweben, das ist ein hohles, ein halbes Leben. Doch glücklich ist der begnadete Mann, der seine Sorgen sich wählen kann."
    },
    {
        "day": "24-jan",
        "author": "Detlev von Liliencron",
        "message": "Wenn sanft du mir im Arme schliefst, ich deinen Atem hören könnte, im Traum du meinen Namen riefst, um deinen Mund ein Lächeln sonnte – Glückes genug."
    },
    {
        "day": "25-jan",
        "author": "Englisches Sprichwort",
        "message": "Eine Unze Frohsinn wiegt ein Pfund Kummer auf."
    },
    {
        "day": "26-jan",
        "author": "Friedrich Rückert",
        "message": "Du hattest kein Glück und hatte keins; wir nahmen einander; nun haben wir eins. Wo haben wir es denn hergenommen? Es ist vom Himmel auf uns gekommen."
    },
    {
        "day": "27-jan",
        "author": "Arthur Schopenhauer",
        "message": "Ist einer heiter, so ist es einerlei, ob er jung oder alt, gerade oder buckelig, arm oder reich sei, er ist glücklich."
    },
    {
        "day": "28-jan",
        "author": "Christoph Wilhelm von Hufeland",
        "message": "Seelenruhe, Heiterkeit und Zufriedenheit sind die Grundlagen allen Glücks, aller Gesundheit und des langen Lebens."
    },
    {
        "day": "29-jan",
        "author": "Gottfried Keller",
        "message": "Wer Freude und das Glück aus vollem Herzen, aber nobel empfindet, trägt auch das Unglück und den Kummer edel und fest."
    },
    {
        "day": "30-jan",
        "author": "Leo Tolstoi",
        "message": "Und eben diese Nichtvorhandenseins eines Lebensziels gab ihm jenes voll und frohe Bewusstsein der Freiheit, das jetzt sein Glück ausmachte."
    },
    {
        "day": "31-jan",
        "author": "Franz Grillparzer",
        "message": "Eines nur ist Glück hienieden, eins: des Innern stiller Frieden und die schuldbefreite Brust!"
    },
    {
        "day": "1-feb",
        "author": "Charles Darwin",
        "message": "Die Tiere empfinden wie der Mensch Freude und Schmerz, Glück und Unglück."
    },
    {
        "day": "2-feb",
        "author": "Konfuzius",
        "message": "Wer ständig glücklich sein will, muss sich oft verändern."
    },
    {
        "day": "3-feb",
        "author": "Ovid",
        "message": "Glücklich ist, wer das, was er liebt, auch wagt, mit Mut zu beschützen."
    },
    {
        "day": "4-feb",
        "author": "Christian Friedrich Hebbel",
        "message": "Das Glück ist eine Ausnahme von Regel und Gesetz und widerlegt darum keine und keins."
    },
    {
        "day": "5-feb",
        "author": "Friedrich Maximilian von Klinger",
        "message": "Mein Glück ist groß, da es still ist."
    },
    {
        "day": "6-feb",
        "author": "Chinesisches Sprichwort",
        "message": "Das Fenster öffnen und eine Biene aus dem Zimmer lassen – ist das vielleicht nicht Glück?"
    },
    {
        "day": "7-feb",
        "author": "Johann Heinrich Pestalozzi",
        "message": "Denn glücklich ist, wer seine Wünsche in das rechte Verhältnis zu seinen Mitteln bringen vermag."
    },
    {
        "day": "8-feb",
        "author": "Richard Rothe",
        "message": "Der ist ein Glücklicher, der, wenn er sich zur Ruhe niederlegt, sich darauf freut wieder aufzuwachen."
    },
    {
        "day": "9-feb",
        "author": "Karl Frenzel",
        "message": "So ist das Glück, es nährt sich dir, es berührt deine Stirn, du aber bist so betroffen von seiner Gegenwart, so befangen und machtlos, es zu ergreifen, dass du die Göttin erst erkennst, wenn sie entschwunden ist."
    },
    {
        "day": "10-feb",
        "author": "Volksweisheit",
        "message": "Glück und Liebe sind die einzigen Dinge die sich verdoppeln, wenn man sie teilt."
    },
    {
        "day": "11-feb",
        "author": "Emanuel Wertheimer",
        "message": "Um das Glück zu ersetzen, braucht man zu viel Verstand und zu wenig Moral."
    },
    {
        "day": "12-feb",
        "author": "Giacomo Graf Leopardi",
        "message": "Das verlässlichste Glück dieses Lebens ist das nichtige Glück der Illusion."
    },
    {
        "day": "13-feb",
        "author": "Demokrit",
        "message": "Seligkeit und Unseligkeit beruhn in der Psyche."
    },
    {
        "day": "14-feb",
        "author": "Charles Joseph Fürst von Ligne",
        "message": "Es gibt Leute, die so sehr Feind ihrer selbst sind, dass sie lieber ein Unglück haben, das sie haben kommen sehen: weil sie es vorausgesehen haben, als den Genuss eines Glücks, auf das sie nicht gefasst waren."
    },
    {
        "day": "15-feb",
        "author": "Aischylos",
        "message": "Kein Sterblicher fühlt an des Glückes Genuss sich gesättigt."
    },
    {
        "day": "16-feb",
        "author": "Irisches Sprichwort",
        "message": "Wenn ich die Glücksfälle in meinem Leben zähle, zähle ich dich zweimal!"
    },
    {
        "day": "17-feb",
        "author": "Helmuth Graf von Moltke",
        "message": "Niemand lässt sich gern zwingen, auch nicht einmal zwingen, glücklich zu sein, und wie oft schon überwog die Idee den wirklichen Vorteil."
    },
    {
        "day": "18-feb",
        "author": "Karl Frenzel",
        "message": "Der Engel des Glücks pocht nur einmal an unsere Pforte; wehe dem Verblendeten, der nicht öffnet."
    },
    {
        "day": "19-feb",
        "author": "Johann Nepomuk Nestroy",
        "message": "Wie albern der Grundsatz über die Unbeständigkeit der Glücks, es gibt gar nix Beständigeres."
    },
    {
        "day": "20-feb",
        "author": "Arthur Schopenhauer",
        "message": "Denn um nicht sehr unglücklich zu werden, ist das sicherste Mittel, dass man nicht verlange, sehr glücklich zu sein."
    },
    {
        "day": "21-feb",
        "author": "John Owen",
        "message": "Das Glück ist gut und fromm; gleich teilt es seine Gaben: Die Reichen lässt es Furcht, die Armen Hoffnung haben."
    },
    {
        "day": "22-feb",
        "author": "Mongolisches Sprichwort",
        "message": "Das Glück ist für das Leben, was der Tau für den Rasen ist."
    },
    {
        "day": "23-feb",
        "author": "Theognis",
        "message": "Aber am meisten beglückt, wer, was er liebte, gewann."
    },
    {
        "day": "24-feb",
        "author": "Carl Hilty",
        "message": "Unten am Eingang des „Berges der Läuterung“ wird die unumwundene Erklärung verlangt, jeden Preis, der gefordert werden möge, für das wahre Glück zu zahlen: ohne das findet kein Einlass statt, und auf einem bequemeren Wege ist noch nie jemand zum Glücke gelangt."
    },
    {
        "day": "25-feb",
        "author": "Voltaire",
        "message": "Wenn ihr glaubet, glücklich zu sein, so wäret ihr es auch."
    },
    {
        "day": "26-feb",
        "author": "Peter Sirius",
        "message": "Glück hat manchen niedergerungen, den vordem kein Unglück bezwungen."
    },
    {
        "day": "27-feb",
        "author": "Deutsches Sprichwort",
        "message": "Fliegst du weg und kommst zurück, Ist‘s nicht mehr das alte Glück."
    },
    {
        "day": "28-feb",
        "author": "Arthur Schopenhauer",
        "message": "Die höchsten Stände in ihrem Glanz, in ihrer Pracht und Prunk und Herrlichkeit und Repräsentation aller Art können sagen: unser Glück liegt ganz außerhalb unserer selbst; sein Ort sind die Köpfe anderer."
    },
    {
        "day": "29-feb",
        "author": "Ferdinand Raimund",
        "message": "Mit unglücklichen Menschen muss man subtil umgehen, die glücklichen können schon eher einen Puff aushalten."
    },
    {
        "day": "1-mar",
        "author": "Juvenal",
        "message": "Gesunder Menschenverstand ist rar im Glück."
    },
    {
        "day": "2-mar",
        "author": "Arabisches Sprichwort",
        "message": "Wirf ein Glückskind in den Fluss und es entsteigt ihm mit einem Fisch im Munde."
    },
    {
        "day": "3-mar",
        "author": "Leopold Schefer",
        "message": "Die zarte, schöne Welt, schön anzuschauen, zart empfinden ist das Glück, und Glück im Herzen schützt vor allem Unglück."
    },
    {
        "day": "4-mar",
        "author": "Pobilius Syrus",
        "message": "Das Glück ist unbeständig: schnell fordert es zurück, was es gegeben hat."
    },
    {
        "day": "5-mar",
        "author": "Schottisches Sprichwort",
        "message": "Ein Zoll Glück ist so viel wert als ein Klafter Überlegung."
    },
    {
        "day": "6-mar",
        "author": "Karl Theodor Körner",
        "message": "Der hat nie das Glück gekostet, der‘s in Ruhe genießen will."
    },
    {
        "day": "7-mar",
        "author": "Friedrich von Schiller",
        "message": "Die Welt wird nie das Glück erlauben, als Beute wird es nur gehascht; entwenden musst du‘s oder rauben, eh dich die Missgunst überrascht."
    },
    {
        "day": "8-mar",
        "author": "Erasmus von Rotterdam",
        "message": "Die höchste Form des Glücks ist ein Leben mit einem gewissen Grad an Verrücktheit."
    },
    {
        "day": "9-mar",
        "author": "Theodor Fontane",
        "message": "Wenn man glücklich ist, soll man nicht noch glücklicher sein wollen."
    },
    {
        "day": "10-mar",
        "author": "Demokrit",
        "message": "Mut steht am Anfang des Handelns, Glück am Ende."
    },
    {
        "day": "11-mar",
        "author": "Wilhelm Busch",
        "message": "Glück entsteht oft durch Aufmerksamkeit in kleinen Dingen, Unglück oft durch Vernachlässigung kleiner Dinge."
    },
    {
        "day": "12-mar",
        "author": "Søren Kierkegaard",
        "message": "Das Vergleichen ist das Ende des Glücks und der Anfang der Unzufriedenheit."
    },
    {
        "day": "13-mar",
        "author": "Ralph Waldo Emerson",
        "message": "Glück ist ein Parfüm, das du nicht auf andere sprühen kannst, ohne selbst ein paar Tropen abzubekommen."
    },
    {
        "day": "14-mar",
        "author": "Epikur",
        "message": "Wenn du einen Menschen glücklich machen willst, dann füge nichts seinem Reichtum hinzu, sondern nimm ihm einige von seinen Wünschen."
    },
    {
        "day": "15-mar",
        "author": "Sébastien Chamfort",
        "message": "Es ist schwer, das Glück in uns zu finden, und es ist ganz unmöglich es anderswo zu finden."
    },
    {
        "day": "16-mar",
        "author": "Johann Wolfgang von Goethe",
        "message": "Glücklich allein ist die Seele, die liebt."
    },
    {
        "day": "17-mar",
        "author": "John Locke",
        "message": "Glück und Unglück sind Namen für Dinge, deren äußerste Grenzen wir nicht kennen."
    },
    {
        "day": "18-mar",
        "author": "Anaximander",
        "message": "Wie oft das größte Glück zerstört ein Augenblick!"
    },
    {
        "day": "19-mar",
        "author": "Fijodor Michailowitsch Dostojeswski",
        "message": "Alles ist gut. Der Mensch ist unglücklich, weil er nicht weiß, dass er glücklich ist. Nur deshalb. Das ist alles, alles! Wer das erkennt, der wird gleich glücklich sein, sofort im selben Augenblick."
    },
    {
        "day": "20-mar",
        "author": "Cicero",
        "message": "Anteilnehmende Freundschaft macht das Glück strahlender und erleichtert das Unglück."
    },
    {
        "day": "21-mar",
        "author": "Johann Wolfgang von Goethe",
        "message": "Das schönste Glück des denkenden Menschen ist, das Erforschliche erforscht zu haben und das Unerforschte zu verehren."
    },
    {
        "day": "22-mar",
        "author": "Ralph Waldo Emerson",
        "message": "Das Geheimnis des Glücks ist Freude in unseren Händen."
    },
    {
        "day": "23-mar",
        "author": "Aristoteles",
        "message": "Glück ist Selbstgenügsamkeit."
    },
    {
        "day": "24-mar",
        "author": "Ambrose Bierce",
        "message": "Zukunft: jene Zeit, in der unsere Geschäfte gut gehen, unsere Freunde treu sind und unser Glück gesichert ist."
    },
    {
        "day": "25-mar",
        "author": "Friedrich der Große",
        "message": "Ein Augenblick des Glücks wiegt Jahrtausende das Nachruhms auf."
    },
    {
        "day": "26-mar",
        "author": "Henrik Ibsen",
        "message": "Nehmen Sie einem Durchschnittsmenschen die Lebenslüge, und Sie nehmen ihm zu gleicher Zeit das Glück."
    },
    {
        "day": "27-mar",
        "author": "Johann Wolfgang von Goethe",
        "message": "Willkürlich handeln ist des Reichen Glück."
    },
    {
        "day": "28-mar",
        "author": "Marie von Ebner-Eschenbach",
        "message": "Die uns gespendete Liebe, die wir nicht als Segen und Glück empfinden, empfinden wir als als Last."
    },
    {
        "day": "29-mar",
        "author": "Arthur Schopenhauer",
        "message": "Das Glück gehört denen, die sich selber genügen."
    },
    {
        "day": "30-mar",
        "author": "Friedrich von Schiller",
        "message": "Aus den Wolken muss es fallen, Aus der Götter Schoß das Glück, Und der mächtigste von allen Herrschern ist der Augenblick."
    },
    {
        "day": "31-mar",
        "author": "Johann Wolfgang von Goethe",
        "message": "Das geistreichste Zusammensein lebelustiger Menschen zeichnet sich vor allem aus durch seine Sprach- und Gebärdensymbolik. Es entsteht eine Art Gauneridom, welches, indem es die Eingeweihten höchst glücklich macht, den Fremden unbemerkt bleibt, oder, bemerkt verdrießlich wird."
    },
    {
        "day": "1-apr",
        "author": "Victor Hugo",
        "message": "Das Glück will jedermann glücklich wissen."
    },
    {
        "day": "2-apr",
        "author": "Johann Wolfgang von Goethe",
        "message": "Das höchste Glück ist das, welches unsere Mängel verbessert und unsere Fehler ausgleicht."
    },
    {
        "day": "3-apr",
        "author": "Gibran Khalil Gibran",
        "message": "Dein Lebensglück ist wie ein Vogel, den du liebst. Du nährst ihn mit deinen Körnern deines Herzens und tränkst ihn mit dem Licht deiner Augen."
    },
    {
        "day": "4-apr",
        "author": "Friedrich Nietzsche",
        "message": "Dem Individuum, sofern es sein Glück will, soll man keine Vorschriften über den Weg zum Glück geben: denn das individuelle Glück quillt aus eigenen, jedermann unbekannten Gesetzen, es kann mit Vorschriften von außen her nur verhindert, gehemmt werden."
    },
    {
        "day": "5-apr",
        "author": "Johann Heinrich Pestalozzi",
        "message": "Denn, um glücklich zu sein, fordert es beim Menschen nicht bloß, dass er wohl versorgt sei, sondern auch, dass er glaube, er sei‘s."
    },
    {
        "day": "6-apr",
        "author": "Leo Tolstoi",
        "message": "Wenn es möglich wäre, dass der Mensch einen Zustand schaffte, in dem er müßiggehen dürfte und dabei die Überzeugung hätte, ein nützliches Glied der menschlichen Gesellschaft zu sein und sein Schuldigkeit zu tun, dann hätte er einen Teil seiner ursprünglichen Glückseligkeit wiedergefunden."
    },
    {
        "day": "7-apr",
        "author": "Arthur Schopenhauer",
        "message": "Der allgemeinste Überblick zeigt uns, als die Feinde des menschlichen Glückes, den Schmerz und die Langeweile."
    },
    {
        "day": "8-apr",
        "author": "Johann Wolfgang von Goethe",
        "message": "Der ist der glücklichste Mensch, der das Ende seines Lebens mit dem Anfang in Verbindung setzen kann."
    },
    {
        "day": "9-apr",
        "author": "William Shakespeare",
        "message": "Ein tiefer Fall führt oft zu höherem Glück."
    },
    {
        "day": "10-apr",
        "author": "Laotse",
        "message": "Im Unglück verbirgt sich das Glück. Im Glück verbirgt sich das Unglück."
    },
    {
        "day": "11-apr",
        "author": "Seneca",
        "message": "Je größer das Gut, desto größer die Sorge, und keinem Glücke ist weniger zu trauen als dem gütigsten."
    },
    {
        "day": "12-apr",
        "author": "Johann Wolfgang von Goethe",
        "message": "Glückliche Kinder und Jünglinge, wandeln in einer Art von Trunkenheit vor sich hin, die sich dadurch besonders bemerklich macht, das die Guten, Unschuldigen das Verhältnis, der jedesmaligen Umgebung kaum zu bemerken, noch weniger anzuerkennen wissen."
    },
    {
        "day": "13-apr",
        "author": "Marie von Ebner-Eschenbach",
        "message": "Man sollte nicht sprechen von der Kunst, glücklich zu sein, sondern von der Kunst sich glücklich zu fühlen."
    },
    {
        "day": "14-apr",
        "author": "Friedrich von Schiller",
        "message": "Nicht an die Güter hänge dein Herz, Die das Leben vergänglich zieren, Wer besitzt, der lerne verlieren, Wer im Glück ist, der lerne den Schmerz."
    },
    {
        "day": "15-apr",
        "author": "Victor Hugo",
        "message": "Sind wir glücklich, weil wir gut sind, oder sind wir gut, weil wir glücklich sind?"
    },
    {
        "day": "16-apr",
        "author": "Epikr",
        "message": "So halten wir die Genügsamkeit für ein großes Glück, nicht, weil wir uns beständig mit wenigem begnügen wollen, sondern damit wir froh bleiben, wenn nur weniges vorhanden ist, in der sicheren Überzeugung, dass dem der Überfluss am besten schmeckt, der seiner am wenigsten bedarf."
    },
    {
        "day": "17-apr",
        "author": "Johann Wolfgang von Goethe",
        "message": "Nun schaut der Geist nicht vorwärts, nicht zurück, die Gegenwart allein – ist unser Glück."
    },
    {
        "day": "18-apr",
        "author": "Leo Tolstoi",
        "message": "Solange Leben da ist, gibt es auch Glück."
    },
    {
        "day": "19-apr",
        "author": "Friedrich von Schiller",
        "message": "Raum ist in der kleinsten Hütte. Für ein glücklich liebend Paar."
    },
    {
        "day": "20-apr",
        "author": "Seneca",
        "message": "Wer die Einsicht besitzt, ist auch maßvoll; wer maßvoll ist, auch gleichmütig; wer gleichmütig ist, lässt sich nicht aus der Ruhe bringen; wer sich nicht aus der Ruhe bringen lässt, ist ohne Kummer, wer ohne Kummer ist, ist glücklich: also ist der Einsichtige glücklich, und die Einsicht reicht aus für ein glückliches Leben!"
    },
    {
        "day": "21-apr",
        "author": "Johann Wolfgang von Goethe",
        "message": "Wahrhaft Liebende betrachten alles, was sie bisher empfunden, nur als Vorbereitung zum gegenwärtigen Glück."
    },
    {
        "day": "22-apr",
        "author": "Leo Tolstoi",
        "message": "Wozu brauche ich Freiheit? Das Glück besteht nur darin, dass ich liebe, das ich danach strebe, in ihren Wünschen, in ihren Gedanken aufzugehen, dass ich also gar keine Freiheit habe – darin allein besteht das Glück!"
    },
    {
        "day": "23-apr",
        "author": "Friedrich Nietzsche",
        "message": "Wenn man nicht feste, ruhige Linien am Horizonte seines Lebens hat, Gebirgs- und Waldlinien gleichsam, so wird der innerste Wille das Menschen selber unruhig, zerstreut und begehrlich, wie das Wesen des Städters; er hat kein Glück und gibt kein Glück."
    },
    {
        "day": "24-apr",
        "author": "Gibran Khalil Gibran",
        "message": "Die Bande, welche die Traurigkeit zwischen zwei Seelen knüpft, sind stärker als die Bande der Glückseligkeit. Und die Liebe, die mit Tränen besiegelt wird, bleibt ewig rein und schön."
    },
    {
        "day": "25-apr",
        "author": "Wilhelm Hertz",
        "message": "Dunkel umfängt uns rings, doch steigt die Sonne der Liebe über des Abgrunds Nacht, spielen die Falter des Glücks."
    },
    {
        "day": "26-apr",
        "author": "Johann Nepomuk Nestroy",
        "message": "Mit ein bisserl Charakter kann der Mensch sein Unglück prächtig verschweigen, aber ‘s Glück – da wird jeder Atemzug zur Heroldstrompeten, jede Bewegung trommelts aus: „hier is a kolossale Seligkeit zu sehn!“"
    },
    {
        "day": "27-apr",
        "author": "Saadî",
        "message": "Langsam kommendes Glück pflegt auch am längsten zu weilen."
    },
    {
        "day": "28-apr",
        "author": "Franz Grillparzer",
        "message": "Jeder Mensch kann glücklich sein, wenn er nur will!"
    },
    {
        "day": "29-apr",
        "author": "Napoleon I. Bonaparte",
        "message": "Größtes Glück auf Erden ist es, eine Nacht zwischen einer schönen Frau und einem schönen Himmel zu teilen."
    },
    {
        "day": "30-apr",
        "author": "Aus dem Kudrunlied",
        "message": "Das Glück ist wetterwendisch und rund gleich wie ein Ball."
    },
    {
        "day": "1-may",
        "author": "Joseph Victor von Scheffel",
        "message": "Das Glück lässt sich nicht jagen, Von jedem Jägerlein; Mit Wagen und Entsagen, Muss drum gestritten sein."
    },
    {
        "day": "2-may",
        "author": "Aristoteles",
        "message": "Die Glückseligkeit besteht in dem glücklichen Leben, das glückliche Leben im tugendhaften Leben."
    },
    {
        "day": "3-may",
        "author": "Plutarch",
        "message": "Unrechtmäßig ist es, wenn man, ohne zu schießen das Ziel treffen, ohne standzuhalten siegen, ohne Tätigkeit eine Unternehmung gut ausführen und als schlechter Mensch glücklich sein will."
    },
    {
        "day": "4-may",
        "author": "Oswald Sprengler",
        "message": "Tiefes Glück ist Gegenwart ohne Denken."
    },
    {
        "day": "5-may",
        "author": "Thomas Hobbes",
        "message": "Das Glück ist wie der Markt, wo oftmals, lässt du dir Zeit, die Preise fallen werden."
    },
    {
        "day": "6-may",
        "author": "Japanisches Sprichwort",
        "message": "Die Seligkeit eines Augenblicks verlängert das Leben um tausend Jahre."
    },
    {
        "day": "7-may",
        "author": "William Morris",
        "message": "Wenn ich mir überlege, was ich mir wünsche, finde ich, dass dafür keine andere Bezeichnung angemessen ist als das Wort „Glück“."
    },
    {
        "day": "8-may",
        "author": "Christian Friedrich Hebbel",
        "message": "Zum Erwerben eines Glückes gehört Fleiß und Geduld, und zur Erhaltung desselben gehört Mäßigung und Vorsicht. Langsam und Schritt für Schritt steigt man eine Treppe hinauf. Aber in einem Augenblicke fällt man hinab und bringt Wunden und Schmerz genug mit auf die Erde."
    },
    {
        "day": "9-may",
        "author": "Maxim Gorki",
        "message": "Wenn auf Erden Glück möglich ist, dann erst, wenn wir die Größe der Frau begriffen haben."
    },
    {
        "day": "10-may",
        "author": "Oswald Sprengler",
        "message": "Dauerndes Glück ist Langeweile."
    },
    {
        "day": "11-may",
        "author": "Demokrit",
        "message": "Weder vom Körper noch vom Geld hängt es ab, ob Menschen glücklich sind, sondern ob der Mensch mit sich zurechtkommt oder immer etwas anderes will."
    },
    {
        "day": "12-may",
        "author": "Bettina von Arnim",
        "message": "Wenn der Mensch nicht schon Seligkeit in sich hätte, könnte er nicht selig werden."
    },
    {
        "day": "13-may",
        "author": "Eripides",
        "message": "Denn dunkel ist das Glückes launenhafter Gang. Ein ungreifbar, unergründlich Rätselspiel."
    },
    {
        "day": "14-may",
        "author": "Johann Wolfgang von Goethe",
        "message": "Wenn man mit sich selbst einig ist und mit seinen Nächsten, das ist auf der Welt das Beste."
    },
    {
        "day": "15-may",
        "author": "Franz Grillparzer",
        "message": "Was ist der Erde Glück? – Ein Schatten! Was ist der Erde Ruhm? – Ein Traum! Du Armer! Der von Schatten du geträumt! Der Traum ist aus, allein die Nacht noch nicht."
    },
    {
        "day": "16-may",
        "author": "Seneca",
        "message": "Glück ist die Fähigkeit zum Verzicht."
    },
    {
        "day": "17-may",
        "author": "John Stuart Mill",
        "message": "Fragt euch, ob ihr glücklich seid, und ihr werdet aufhören es zu sein."
    },
    {
        "day": "18-may",
        "author": "Johann Wolfgang von Goethe",
        "message": "Der ist am glücklichsten, er sein ein König oder ein Geringer, dem in seinem Hause Wohl bereitet ist."
    },
    {
        "day": "19-may",
        "author": "Julius Wilhelm Zincgref",
        "message": "Fortuna setzt uns auf ein Rad. Wer heut den Lustsitz oben hat, Liegt morgen unten. Bist du klug, So schicke dich in den Betrug."
    },
    {
        "day": "20-may",
        "author": "Liselotte von der Pfalz",
        "message": "Wer das Glück nicht in sich selber finden kann, wird es unnötigerweise anderswo suchen."
    },
    {
        "day": "21-may",
        "author": "Luc de Clapiers Vauvenargues",
        "message": "Ich habe nachgeforscht, ob es ein Mittel gibt, ohne jedes Verdienst sein Glück zu machen; ich habe keins gefunden."
    },
    {
        "day": "22-may",
        "author": "Emanuel Geibel",
        "message": "Ihr wisst‘s, wie wir so selig waren, So selig und so rein dabei – Nein, wie man‘s ist mit achtzehn Jahren: Es war im schönen Monat Mai."
    },
    {
        "day": "23-may",
        "author": "Michael Drayton",
        "message": "Glück kommt nie zu spät."
    },
    {
        "day": "24-may",
        "author": "Karl Julius Weber",
        "message": "Wären die Menschen mit ihrem Glück so zufrieden wie mit ihrem Verstande, welche Millionen Glücklicher!"
    },
    {
        "day": "25-may",
        "author": "Jean de la Bruyère",
        "message": "Unter allen Mitteln, sein Glück zu machen, ist das kürzeste und beste das: die Leute klar erkennen zu lassen, das es in ihrem Interesse liege, euch Gutes zu erweisen."
    },
    {
        "day": "26-may",
        "author": "Monier Williams",
        "message": "Kein höh‘res Glück dem Menschen lacht, als wenn er andre glücklich macht."
    },
    {
        "day": "27-may",
        "author": "François de la Rochefoucauld",
        "message": "Niemandem erscheint das Glück so blind wie denen, denen es keine Gunst erwiesen hat."
    },
    {
        "day": "28-may",
        "author": "Nicolas Chamfort",
        "message": "Mit dem Glück verhält es sich wie mit den Uhren: die einfachsten gehen am besten."
    },
    {
        "day": "29-may",
        "author": "Gilbert Keith Chesterton",
        "message": "Alle Menschen sind Demokraten, wenn sie glücklich sind."
    },
    {
        "day": "30-may",
        "author": "Laurentius Laurentii Laurinus",
        "message": "Die größte Krankheit der menschlichen Glückseligkeit ist die Ungewissheit; um sie loszuwerden, kann man schon ein wenig Unglück ertragen."
    },
    {
        "day": "31-may",
        "author": "Friedrich Hölderlin",
        "message": "Das Glück ist hinter dem Pfluge."
    },
    {
        "day": "1-jun",
        "author": "Vinzenz von Paul",
        "message": "Als einen glücklichen Tag sollten wir den betrachten, an dem wir etwas Böses verhindert oder etwas Gutes getan haben."
    },
    {
        "day": "2-jun",
        "author": "Montesquieu",
        "message": "Man sollte die Menschen von ihrem Glück überzeugen; sie beachten es nicht, obwohl sie es besitzen."
    },
    {
        "day": "3-jun",
        "author": "Malwida Freiin von Meysenbug",
        "message": "Ich liebe die Welt, die Sonne, die Erde, die Blumen, die Vergnügungen, die Jugend, die Schönheit; ich habe Durst nach Glück!"
    },
    {
        "day": "4-jun",
        "author": "Horaz",
        "message": "Der verdient, dass man ihn glücklich preise, der der Götter milde Gaben weise nutzt und unverdientes Missgeschick mutig trägt."
    },
    {
        "day": "5-jun",
        "author": "Sir Francis Bacon",
        "message": "Vier Säulen stützen den Tempel der irdischen Glückseligkeit: Gesundheit, Gemütsruhe, Wohlstand und Freundschaft."
    },
    {
        "day": "6-jun",
        "author": "Friedrich Halm",
        "message": "Glück ist, was jeder sich als Glück gedacht."
    },
    {
        "day": "7-jun",
        "author": "Chinesisches Sprichwort",
        "message": "Der zum Glück bestimmte Mensch, braucht sich nicht zu beeilen."
    },
    {
        "day": "8-jun",
        "author": "Sophie Bernhardi",
        "message": "Der Mensch lebt in einer ewigen Furcht vor seinem Glück. Es tritt ihm schon als Kind entgegen, und er entzieht sich der liebenden Gewalt, er möchte gerne sich selbst versuchen und durch eigene Kraft das erringen, was ihm ein freundliches Geschick früh mit auf die Welt gab."
    },
    {
        "day": "9-jun",
        "author": "Sprichwort der Beduinen",
        "message": "Glück ist eine Oase, die zu erreichen nur träumenden Kamelen gelingt."
    },
    {
        "day": "10-jun",
        "author": "Deutsches Sprichwort",
        "message": "Auch der Stolzeste nimmt gern vom Glück ein Geschenk an."
    },
    {
        "day": "11-jun",
        "author": "Christian Fürchtegott Gellert",
        "message": "Willst du dich im Glück nicht ausgelassen freun, um Unglück nicht unmäßig kränken, so lern so klug wie Eulenspiegel sein: im Unglück gern ans Glück, im Glück ans Unglück denken!"
    },
    {
        "day": "12-jun",
        "author": "Johann Wolfgang von Goethe",
        "message": "Liegt dir Gestern klar und offen, wirst du heute kräftig frei, kannst auch auf ein Morgen hoffen, das nicht minder glücklich sei."
    },
    {
        "day": "13-jun",
        "author": "Sophokles",
        "message": "Des Glückes Welle hebt, die Welle stürzt den Hohen und den Niederen immerzu; kein Seher weiß, wann sie zur Ruhe kommt."
    },
    {
        "day": "14-jun",
        "author": "Johann Peter Uz",
        "message": "Genieße dein Glück! Die Kunst, sich zu erfreun, ist für den Sterblichen die Kunst beglückt zu sein."
    },
    {
        "day": "15-jun",
        "author": "Christian Dietrich Grabbe",
        "message": "Glück ist die Bescheidenheit, mit der der Wurm nicht weiter strebt zu kriechen, als seine Kraft ihn trägt."
    },
    {
        "day": "16-jun",
        "author": "Pierre Corneille",
        "message": "Niemals genießen wir ein ganze vollkommenes Glück: den stolzesten Triumphen ist ein Wermutstropfen beigemengt; stets gibt es einen Gram in einem solchen Augenblick, der sich in unsere ungetrübte Freude drängt."
    },
    {
        "day": "17-jun",
        "author": "Charles Baudelaire",
        "message": "Es ist gut, die Glücklichen dieser Welt hin und wieder wissen zu lassen, und wäre es auch nur, um ihren törichten Hochmut ein wenig zu schmälern, dass es ein höheres Glück gibt als das ihre, umfassender und erlesener."
    },
    {
        "day": "18-jun",
        "author": "Ulrich Reichsritter von Hutten",
        "message": "Es ist ein schweres Amt, des Glückes Günstling zu sein, und keiner hat‘s bis an seinen Tod behauptet."
    },
    {
        "day": "19-jun",
        "author": "Wilhelm von Humboldt",
        "message": "Nicht Schmerz ist Unglück, Glück ist immer Freude; Wer sein Geschick erfüllt, dem lächeln beide!"
    },
    {
        "day": "20-jun",
        "author": "Erasmus von Rotterdam",
        "message": "Die wesentliche Voraussetzung, für Glück ist die Bereitschaft, der zu sein, der man ist."
    },
    {
        "day": "21-jun",
        "author": "Gero Vercetti",
        "message": "Glück ist Vollkommenheit des Lebens, die des Reichtums Ursprung ist."
    },
    {
        "day": "22-jun",
        "author": "Arthus Bonus",
        "message": "Stimme dich rein, das Glück geht auf der Straße. Wir müssen uns genussfähig machen für die kleinen Freuden und vertrauen, dass Glück zum Glücke kommt."
    },
    {
        "day": "23-jun",
        "author": "Madame de Staël",
        "message": "Alles ist Gegenstand tödlicher Beunruhigung, wenn es einem um sein einziges Glück geht."
    },
    {
        "day": "24-jun",
        "author": "Wilhelm von Humboldt",
        "message": "Es ist eine Sache im Leben, dass, wenn man gar nicht an Glück oder Unglück denkt, sondern nur an strenge, sich nicht schonende Pflichterfüllung, das Glück sich von selbst, auch bei entbehrender, mühevoller Lebensweise einstellt."
    },
    {
        "day": "25-jun",
        "author": "Luc de Clapiers Vauvenargues",
        "message": "Ob arm oder reich, niemand ist gut oder glücklich, wenn ihn das Schicksal nicht auf den richtigen Platz gestellt hat."
    },
    {
        "day": "26-jun",
        "author": "Sophokles",
        "message": "Verständig zu sein ist der Hauptteil des Glücks."
    },
    {
        "day": "27-jun",
        "author": "Otto von Leixner",
        "message": "Ein ungestörtes Glück verlangen, heißt Mondeslicht mit Netzen fangen, den Sonnenstrahl mit Ketten fesseln und Rosen fordern von den Nesseln."
    },
    {
        "day": "28-jun",
        "author": "Friedrich von Schiller",
        "message": "Nur wenn sie reif ist, fällt des Schicksals Frucht."
    },
    {
        "day": "29-jun",
        "author": "Oliver Goldsmith",
        "message": "Nur auf uns selbst sind wir stets angewiesen, An allen Orten und zu allen Zeiten. Darum, willst du Glückseligkeit genießen, So kannst du sie nur selber dir bereiten."
    },
    {
        "day": "30-jun",
        "author": "Annette von Droste-Hülshoff",
        "message": "Das Glück ist wie ein Brillengestell. Man sucht es, bis man darauf tritt, und dann ist es hinüber."
    },
    {
        "day": "1-jul",
        "author": "Seneca",
        "message": "Wie glücklich man am Lande war, merkt man erst, wenn das Schiff untergeht."
    },
    {
        "day": "2-jul",
        "author": "Johann Wolfgang von Goethe",
        "message": "Volk und Knecht und Überwinder, Sie gestehn zu jeder Zeit, Höchstes Glück der Erdenkinder, Sei nur die Persöhnlichkeit."
    },
    {
        "day": "3-jul",
        "author": "Iwan Sergejewitsch Turgenjew",
        "message": "Willst du glücklich sein, dann lerne erst leiden."
    },
    {
        "day": "4-jul",
        "author": "Metrodorus von Chios",
        "message": "Die Ursache der Glückseligkeit, die in uns liegt, ist größer als die, welche aus den Dingen stammt."
    },
    {
        "day": "5-jul",
        "author": "Karl Kraus",
        "message": "Ungeschoren zu bleiben ist der Wunsch aller Schafe."
    },
    {
        "day": "6-jul",
        "author": "Gottfried Keller",
        "message": "Man kann nicht alle Sterne zwingen!"
    },
    {
        "day": "7-jul",
        "author": "Caroline von Böhmer-Schlegel-Schelling",
        "message": "Jeder angenehme Augenblick hat Wert für mich – Glückseligkeit besteht nur in Augenblicken. Ich wurde glücklich, da ich das lernte."
    },
    {
        "day": "8-jul",
        "author": "Leo Tolstoi",
        "message": "Vermehrung des menschlichen Glücks wird nur durch Vermehrung der Liebe möglich."
    },
    {
        "day": "9-jul",
        "author": "Wilhelm von Humboldt",
        "message": "In schweren Zeiten muss man seine Kräfte doppelt anstrengen, um seine Pflicht zu erfüllen und das Rechte zu tun; aber für sein inneres Glück und seine innere Ruhe muss man andere Dinge suchen, die unentreißbar sind."
    },
    {
        "day": "10-jul",
        "author": "Vicomte de Chateaubriand",
        "message": "Wäre ich Narr genug, noch an das Glück zu glauben, so würde ich es in der Gewohnheit suchen."
    },
    {
        "day": "11-jul",
        "author": "Abraham Lincoln",
        "message": "Die meisten Menschen sind in dem Maße glücklich, wie sie es sich gestatten."
    },
    {
        "day": "12-jul",
        "author": "Alphonse Karr",
        "message": "Das Glück besteht aus verschiedenem Unglück."
    },
    {
        "day": "13-jul",
        "author": "Claude-Adrien Helvetius",
        "message": "Das Glück der Menschen ist, das zu lieben, was sie tun müssen. Auf diesem Prinzip ist die Gesellschaft nicht aufgebaut."
    },
    {
        "day": "14-jul",
        "author": "Aristoteles",
        "message": "Manche Leute nämlich halten die Bedingungen der Glückseligkeit für Bestandteile von ihr."
    },
    {
        "day": "15-jul",
        "author": "Jean de la Bruyère",
        "message": "Wir suchen unser Glück außerhalb von uns selbst, noch dazu im Urteil der Menschen, die wir doch als kriecherisch kennen und als wenig aufrichtig, als Menschen ohne Sinn für Gerechtigkeit, voller Missgunst, Launen und Vorurteile: wie absurd!"
    },
    {
        "day": "16-jul",
        "author": "Demokrit",
        "message": "Das Glück ist verschwenderisch, aber unbeständig."
    },
    {
        "day": "17-jul",
        "author": "Mongolisches Sprichwort",
        "message": "Reich ist, wer keine Schulden hat, glücklich, wer ohne Krankheit lebt."
    },
    {
        "day": "18-jul",
        "author": "Georg Christoph Lichtenberg",
        "message": "Glück ist eigentlich nur der Wille zum Glücklichsein."
    },
    {
        "day": "19-jul",
        "author": "Deutsches Sprichwort",
        "message": "Das Glück kann man verdoppeln, indem man es teilt."
    },
    {
        "day": "20-jul",
        "author": "Rahel Varnhagen",
        "message": "Ich war gestern in der größten Harmonie über alle mir bekannten Dinge und in der vollständigen Seelenruhe und fühlte, dass das Glück ist."
    },
    {
        "day": "21-jul",
        "author": "Luc de Clapiers Vauvenargues",
        "message": "Man versucht sein Glück gewöhnlich mit Talenten, die man nicht hat."
    },
    {
        "day": "22-jul",
        "author": "Samuel Johnson",
        "message": "Niemand kann sein Glück genießen, ohne daran zu denken, dass er es genießt."
    },
    {
        "day": "23-jul",
        "author": "Fjodor Michailowitsch Dostojewski",
        "message": "Ich glaube, dass das Glück nur in der heiteren Auffassung des Lebens und in der Vortrefflichkeit des Herzens und nicht in den äußeren Umständen liegt."
    },
    {
        "day": "24-jul",
        "author": "Heinrich von Kleist",
        "message": "Ein jeder hat seine eigene Art, glücklich zu sein, und niemand darf vom anderen verlangen, dass man es in der seinigen sein soll."
    },
    {
        "day": "25-jul",
        "author": "Friedrich Wilhelm Nietzsche",
        "message": "Das Wenigste gerade, das Leiseste, das Leichteste, einer Eidechse Rascheln, ein Hauch, ein Husch, ein Augenblick – wenig macht die Art des besten Glücks."
    },
    {
        "day": "26-jul",
        "author": "Montesquieu",
        "message": "Wären die Menschen in ihrem kleinen Garten geblieben, so hätten wir eine andere Vorstellung von Glück und Unglück als die, die wir jetzt haben."
    },
    {
        "day": "27-jul",
        "author": "Theodor Fontane",
        "message": "Das Glück liegt woanders als in aufgetürmten Fünftalerscheinen."
    },
    {
        "day": "28-jul",
        "author": "Henri Stendhal",
        "message": "Besteht zwischen zwei Menschen völlige Natürlichkeit, so darf ihr Glück für gegründet gelten. Zuneigung und einige andere Gesetze des Seelenlebens machen es einfach zum größten überhaupt möglichen Glück."
    },
    {
        "day": "29-jul",
        "author": "Arthur Schnitzler",
        "message": "Alles, was die Seele durcheinander rüttelt, ist Glück."
    },
    {
        "day": "30-jul",
        "author": "Horaz",
        "message": "Lerne, großes Glück zu ertragen!"
    },
    {
        "day": "31-jul",
        "author": "Christian Morgenstern",
        "message": "Oh, Glück auszugießen über die Welt! Augen leuchten, Herzen erheben machen!"
    },
    {
        "day": "1-aug",
        "author": "Jeremias Gotthelf",
        "message": "Das wahre Glück der Menschen ist eine zarte Blume, tausenderlei Ungeziefer umschwirrt sie, ein unreiner Hauch tötet sie."
    },
    {
        "day": "2-aug",
        "author": "Montesquieu",
        "message": "Man müsste die Menschen vom Glück überzeugen, das sie nicht sehen, selbst wenn sie es genießen."
    },
    {
        "day": "3-aug",
        "author": "Michel de Montaigne",
        "message": "Nach meiner Meinung ist es das glückliche Leben und nicht das glückliche Sterben, worin die menschliche Glückseligkeit beruht."
    },
    {
        "day": "4-aug",
        "author": "Gotthold Ephraim Lessing",
        "message": "Muss man nicht oft unbedachtsam handeln, wenn man das Glück anreizen will, etwas für uns zu tun?"
    },
    {
        "day": "5-aug",
        "author": "Torquato Tasso",
        "message": "Wohl kann die Brust den Schmerz verschlossen halten, doch stummes Glück erträgt die Seele nicht."
    },
    {
        "day": "6-aug",
        "author": "Kurt Tucholsky",
        "message": "Fremder Hunger langweilt, fremdes Glück reizt."
    },
    {
        "day": "7-aug",
        "author": "Sophie Mereau",
        "message": "Es geht mit unserem Glück wie mit Gemälden. Die Nähe drängt es zu gewaltig auf uns; wir müssen in der gehörigen Entfernung stehen, um die Schönheit recht zu fühlen und zu genießen."
    },
    {
        "day": "8-aug",
        "author": "Deutsches Sprichwort",
        "message": "Das Glück gleicht dem Balle: es steigt zum Falle."
    },
    {
        "day": "9-aug",
        "author": "Christian Friedrich Hebbel",
        "message": "Das Glück ist blind, heißt es. Aber diejenigen, die ihm hinterherlaufen, sind auch blind. So ist Fortuna denn die Blinde unter den Blinden."
    },
    {
        "day": "10-aug",
        "author": "Henri Stendhal",
        "message": "Die Seele bekommt alles Einförmige satt, auch das vollkommene Glück."
    },
    {
        "day": "11-aug",
        "author": "Madame de Staël",
        "message": "Glück ist ein Wunderding. Je mehr man gibt, desto mehr hat man."
    },
    {
        "day": "12-aug",
        "author": "Alexander Mitscherlich",
        "message": "Glück ist das Zusammentreffen von Phantasie und Wirklichkeit."
    },
    {
        "day": "13-aug",
        "author": "Demokrit",
        "message": "Glück und Unglück trägt man im Herzen."
    },
    {
        "day": "14-aug",
        "author": "Leopold Ritter von Sacher-Masoch",
        "message": "Das Glück ist nicht wie ein Gut, das einem gehört, sondern eine Pacht, für die man immer wieder zahlen muss."
    },
    {
        "day": "15-aug",
        "author": "Indisches Sprichwort",
        "message": "Glück und Unglück nehmen den Menschen die Maske ab."
    },
    {
        "day": "16-aug",
        "author": "Laotse",
        "message": "Glück verheißend allein ist friedvolles Tun, Unglück verheißend das Handwerk des Krieges."
    },
    {
        "day": "17-aug",
        "author": "Friedrich von Schiller",
        "message": "Jede irdische Venus ersteht wie die erste des Himmels, eine dunkle Geburt aus dem unendlichen Meer."
    },
    {
        "day": "18-aug",
        "author": "Johann Wolfgang von Goethe",
        "message": "Die Gegenwart des Elenden ist dem Glücklichen zur Last! Und ach!, der Glückliche dem Elenden noch mehr."
    },
    {
        "day": "19-aug",
        "author": "Joseph von Eichendorff",
        "message": "Nun, wenn ich ein Taugenichts bin, so ist‘s gut, so will ich in die Welt gehen und mein Glück machen."
    },
    {
        "day": "20-aug",
        "author": "Gilbert Keith Chesterton",
        "message": "Das Glück ist ebenso mysteriös wie die Religion."
    },
    {
        "day": "21-aug",
        "author": "Montesquieu",
        "message": "Wer ist glücklich? Die Götter wissen es, denn sie blicken ins Herz der Weisen, der Könige und der Hirten."
    },
    {
        "day": "22-aug",
        "author": "Kurt Tucholsky",
        "message": "Jedes Glück hat einen kleinen Stich. Wir möchten so viel: Haben. Sein. Und gelten. Dass einer alles hat, das ist selten."
    },
    {
        "day": "23-aug",
        "author": "Horaz",
        "message": "Glück ist, wenn das Pech die anderen trifft."
    },
    {
        "day": "24-aug",
        "author": "Honoré de Balzac",
        "message": "Wer dem Glück nachjagt, muss leichtes Gepäck haben."
    },
    {
        "day": "25-aug",
        "author": "Friedrich Nietzsche",
        "message": "Die erste Wirkung des Glückes ist das Gefühl der Macht."
    },
    {
        "day": "26-aug",
        "author": "Jules Renard",
        "message": "Wenn ein Mensch sagt: „Ich bin glücklich“ so meint er einfach: „Ich habe keine Sorgen, die mich berühren.“"
    },
    {
        "day": "27-aug",
        "author": "Johann Wolfgang von Goethe",
        "message": "Wie sich Verdienst und Glück verketten, Das fällt den Toren niemals ein; Wenn sie den Stein der Weisen hätten, Der Weise mangelte dem Stein."
    },
    {
        "day": "28-aug",
        "author": "Französisches Sprichwort",
        "message": "Glücklich ist, wer es zu sein glaubt."
    },
    {
        "day": "29-aug",
        "author": "Friedrich Nietzsche",
        "message": "Glück liegt in der Geschwindigkeit des Fühlens und Denkens."
    },
    {
        "day": "30-aug",
        "author": "Friedrich von Schiller",
        "message": "Selig, welchen die Götter, die gnädigen, vor der Geburt schon liebten, welchen als Kind Venus im Arme gewiegt."
    },
    {
        "day": "31-aug",
        "author": "Deutsches Sprichwort",
        "message": "Glück in der Liebe und Glück im Spiel, das ist für einen Menschen zu viel."
    },
    {
        "day": "1-sept",
        "author": "Paul Fleming",
        "message": "Tränen der Trauer, Tränen des Glücks; es kommt auf die Seite an, wohin man blickt."
    },
    {
        "day": "2-sept",
        "author": "Johann Wolfgang von Goethe",
        "message": "Man pflegt das Glück wegen seiner großen Beweglichkeit kugelrund zu nennen, und zwar doppelt mit Recht; denn es gilt diese Vergleichung auch in einem anderen Sinne. Ruhig vor Augen stehend, zeigt die Kugel sich dem Betrachtenden als ein befriedigtes, vollkommenes, in sich abgeschlossenes Wesen; daher kann sie aber auch, so wie der Glückliche, unsere Aufmerksamkeit nicht lange fesseln."
    },
    {
        "day": "3-sept",
        "author": "Blaise Pascal",
        "message": "Instinktiv empfinden wir, dass wir unser Glück außer uns suchen müssen."
    },
    {
        "day": "4-sept",
        "author": "Kurt Tucholsky",
        "message": "Glück ist der Zustand den man nicht spürt."
    },
    {
        "day": "5-sept",
        "author": "Wilhelmine Heimburg",
        "message": "Es ist überall heimlich und traut neben einem Menschen, den man gern hat."
    },
    {
        "day": "6-sept",
        "author": "Japanisches Sprichwort",
        "message": "Wo Glück ist, ist auch Leid."
    },
    {
        "day": "7-sept",
        "author": "Johann Wolfgang von Goethe",
        "message": "Hebt mich das Glück, so bin ich froh und sing in dulci Jubilo; senkt sich das Rad und quetscht mich nieder, so denk ich: Nun, es hebt sich wieder!"
    },
    {
        "day": "8-sept",
        "author": "Asiatisches Sprichwort",
        "message": "Keinem nützt ein Glück, das zu später Abendstunde kommt, dass man es im Finsteren gar nicht mehr sehen kann."
    },
    {
        "day": "9-sept",
        "author": "Friedrich Martin von Bodenstedt",
        "message": "Weiß noch keiner, was ihm frommt hier auf dunklem Pfade. Keiner zwingt das Glück, es kommt unverhofft als Gnade."
    },
    {
        "day": "10-sept",
        "author": "Immanuel Kant",
        "message": "Das größte Glück des Menschen ist, dass er selber Urheber seiner Glückseligkeit ist, wenn er fühlt, das zu genießen, was er selber sich erworben hat."
    },
    {
        "day": "11-sept",
        "author": "Johann Nepomuk Nestroy",
        "message": "Glücklich sein ist bei weitem nicht dasselbe, wie aufhören unglücklich zu sein."
    },
    {
        "day": "12-sept",
        "author": "Deutsches Sprichwort",
        "message": "Der Weg zum wahren Glück liegt im Augenblick."
    },
    {
        "day": "13-sept",
        "author": "Luc de Clapiers Vauvenargues",
        "message": "Wie sollte uns Sorglosigkeit glücklich machen, wenn all unsere Vorsorge uns nicht glücklich werden ließ?"
    },
    {
        "day": "14-sept",
        "author": "Asiatisches Sprichwort",
        "message": "Wer das Feld seines Glücks verbreitern will, muss den Grund seines Herzens gleichmäßig machen."
    },
    {
        "day": "15-sept",
        "author": "Paul Fleming",
        "message": "Läuft das Glück auch mal zu Zeiten anders als man meint, ein getreues Herz hilft streiten gegen alles, was uns Feind."
    },
    {
        "day": "16-sept",
        "author": "Oscar Wilde",
        "message": "Nichts macht so alt wie Glück."
    },
    {
        "day": "17-sept",
        "author": "Peter Rosegger",
        "message": "Ich suche mein Glück nicht im Zusammentreffen und Genießen irdischer Güter, denn darin ist es nicht zu finden. Ich habe mein Glück stets, in der Natur und in der Arbeitsfreude gefunden."
    },
    {
        "day": "18-sept",
        "author": "Asiatisches Sprichwort",
        "message": "Kommt das Glück, wer kommt da nicht mit? Kommt das Glück nicht, wer kommt dann?"
    },
    {
        "day": "19-sept",
        "author": "Friedrich der Große",
        "message": "Glück und Zufall sind zwei sinnlose Wörter."
    },
    {
        "day": "20-sept",
        "author": "Friedrich Nietzsche",
        "message": "Glück aber, welches auch sei, gibt Luft, Licht und freie Bewegung."
    },
    {
        "day": "21-sept",
        "author": "Franz Kafka",
        "message": "Theoretisch gibt es eine vollkommene Glücksmöglichkeit: An das Unzerstörbare in sich zu glauben und nicht zu ihm streben."
    },
    {
        "day": "22-sept",
        "author": "Voltaire",
        "message": "Die meisten Menschen sind, um glücklich zu sein, nicht gescheit genug oder nicht dumm genug."
    },
    {
        "day": "23-sept",
        "author": "Ägyptisches Sprichwort",
        "message": "Glück widerfährt dir nicht – Glück findet der, der danach sucht."
    },
    {
        "day": "24-sept",
        "author": "Peter Rosegger",
        "message": "Glücklichsein, das ist des Menschen erster Wunsch und letztes Ziel, er erreicht es im Bunde mit der gütigen Natur; er erreicht es mit der Leuchte des Schönen in der Kunst; er erreicht es auf der Stufenleiter der Tugenden."
    },
    {
        "day": "25-sept",
        "author": "Christian Friedrich Hebbel",
        "message": "Mache dir das Leben ja nicht sauer. Und renne ruhig gegen die Mauer mit deinem Kopf; hast du nur Glück, so weicht die Mauer vor dir zurück."
    },
    {
        "day": "26-sept",
        "author": "Eduard Acda",
        "message": "Glück ist ein Defekt im Schicksal."
    },
    {
        "day": "27-sept",
        "author": "Asiatisches Sprichwort",
        "message": "Ein Mensch von Sanftmut und gutem Charakter schafft sich selbst sein Glück."
    },
    {
        "day": "28-sept",
        "author": "Emanuel Wertheimer",
        "message": "Auf den obersten Stufen des Glücks begegnet man noch mehr Wünschen und Bedürfnissen als auf den untersten."
    },
    {
        "day": "29-sept",
        "author": "Aristoteles",
        "message": "Denn das Glück flößt den meisten Übermut ein, das Unglück Besonnenheit."
    },
    {
        "day": "30-sept",
        "author": "Franz Kafka",
        "message": "Das Glück begreifen, dass der Boden, auf dem du stehst, nicht größer sein kann, als die zwei Füße ihn bedecken."
    },
    {
        "day": "1-oct",
        "author": "Friedrich Wilhelm Joseph von Schelling",
        "message": "Glückseligkeit ist ein Zustand der Passivität."
    },
    {
        "day": "2-oct",
        "author": "Friedrich von Schiller",
        "message": "Die Uhr schlägt keinem Glücklichen."
    },
    {
        "day": "3-oct",
        "author": "Carl Spitteler",
        "message": "Das Glück kauft man nirgends an, das muss man schon selber mitbringen."
    },
    {
        "day": "4-oct",
        "author": "Theodor Fontane",
        "message": "Das Glück, wenn es mir recht ist, liegt in zweierlei: Darin, dass man ganz da steht, wo man hingehört, und zum Zweiten und Besten in einem behaglichen Abwickeln des ganz Alltäglichen, also darin, dass man ausgeschlafen hat, und dass einen die neuen Stiefel nicht drücken."
    },
    {
        "day": "5-oct",
        "author": "Deutsches Sprichwort",
        "message": "Dem Glück gegenüber ist keiner stark genug."
    },
    {
        "day": "6-oct",
        "author": "Marquis de Sade",
        "message": "Nichts im Genuss besteht das Glück, sondern im Zerbrechen der Schranken, die man gegen das Verlangen errichtet hat."
    },
    {
        "day": "7-oct",
        "author": "Deutsches Sprichwort",
        "message": "Der Glückliche verliert das Gedächtnis."
    },
    {
        "day": "8-oct",
        "author": "Friedrich von Schiller",
        "message": "Weil das Glück aus seiner Tonne die Geschicke blind verstreut, freue sich und jauchze heut, wer das Lebenslos gewonnen!"
    },
    {
        "day": "9-oct",
        "author": "Niccoló Machiavelli",
        "message": "Fortuna ist ein Weib, und wenn man sie unterwerfen will, muss man mit ihr streiten und kämpfen."
    },
    {
        "day": "10-oct",
        "author": "Menander",
        "message": "Nicht glücklich ist ein schlechter Mensch, auch wenn er Glück hat."
    },
    {
        "day": "11-oct",
        "author": "Nikolaus Lenau",
        "message": "Menschenherz, was ist dein Glück? Ein rätselhaft geborner. Und, kaum gegrüßt, verlorner, Unwiederholter Augenblick!"
    },
    {
        "day": "12-oct",
        "author": "Fjodor Michailowitsch Dostojewski",
        "message": "Der Mensch wird nicht zum Glück geboren. Der Mensch verdient sich sein Glück immer nur durch Leiden."
    },
    {
        "day": "13-oct",
        "author": "Demokrit",
        "message": "Nicht im Besitz von Herden noch im Golde befindet sich das Lebensglück; Wohnsitz des Glückes ist die Seele."
    },
    {
        "day": "14-oct",
        "author": "Maurice Barres",
        "message": "Das Glück ist im Grunde nichts anderes als der mutige Wille, zu leben, indem man die Bedingungen dieses Lebens annimmt."
    },
    {
        "day": "15-oct",
        "author": "Deutsches Sprichwort",
        "message": "Das Glück hat ein lachendes Gesicht, aber einen grimmigen Hintern."
    },
    {
        "day": "16-oct",
        "author": "Friedrich von Schiller",
        "message": "Ein jeglicher versucht sein Glück, doch schmal ist nur die Bahn zum Rennen."
    },
    {
        "day": "17-oct",
        "author": "Søren Kierkegaard",
        "message": "Die Tür des Glückes geht nicht nach innen auf, dass man auf sie zueilen und aufstoßen könnte, sondern nach außen, und darum hat man nichts zu tun."
    },
    {
        "day": "18-oct",
        "author": "Japanisches Sprichwort",
        "message": "Das Glück kommt zu denen, die lachen."
    },
    {
        "day": "19-oct",
        "author": "Deutsches Sprichwort",
        "message": "Wem das Glück nicht wohl will, der bricht das Bein auf ebener Erd."
    },
    {
        "day": "20-oct",
        "author": "Nicolas Chamfort",
        "message": "Das Vergnügen kann sich auf Illusion stützen, aber das Glück beruht auf der Wahrheit."
    },
    {
        "day": "21-oct",
        "author": "Johann Wolfgang von Goethe",
        "message": "Man verschrumpft im engen Hauswesen; draußen fühlt man sich groß und frei wie die große Natur, die man vor Augen hat."
    },
    {
        "day": "22-oct",
        "author": "Deutsches Sprichwort",
        "message": "Das Glück schenkt nichts, leihet nur."
    },
    {
        "day": "23-oct",
        "author": "Fjodor Michailowitsch Dostojewski",
        "message": "Es gibt kein Glück im Wohlstand, durch Leiden wird Glück erkauft."
    },
    {
        "day": "24-oct",
        "author": "Sappho von Lesbos",
        "message": "Reiterscharen, Soldaten oder auch Schiffe halten die Menschen fürs Schönste auf dunkler Erde; ich meine aber, das Schönste sei, was die Liebe sehnend begehrt."
    },
    {
        "day": "25-oct",
        "author": "Seneca",
        "message": "Niemand ist glücklich, der außerhalb der Wahrheit lebt."
    },
    {
        "day": "26-oct",
        "author": "Ludwig Börne",
        "message": "Glücklichsein ist auch eine Tugend."
    },
    {
        "day": "27-oct",
        "author": "Seneca",
        "message": "Ohne Gesellschaft ist Glück unmöglich."
    },
    {
        "day": "28-oct",
        "author": "Hazrat Inayat Khan",
        "message": "Ein Hinduwort sagt: Der Mensch sucht Vergnügen und findet Leid. Jedes Vergnügen scheint Glück zu sein, es verspricht Glück, aber es ist der Schatten des Glücks. So wie der Schatten einer Person nur die Form derselben wiedergibt und nicht die Person selbst ist, so ist auch das Vergnügen nur der Schatten und nicht das Glück selbst."
    },
    {
        "day": "29-oct",
        "author": "Franz Freiherr von Dingelstedt",
        "message": "Er hat im Leben viel Glück gehabt, und ist doch niemals glücklich gewesen."
    },
    {
        "day": "30-oct",
        "author": "Arthur Schopenhauer",
        "message": "Neun Zehntel unseres Glücks beruhen allein auf der Gesundheit. Mit ihr wird alles eine Quelle des Genusses: Hingegen ist ohne sie kein äußeres Gut, welcher Art es auch sei, genießbar."
    },
    {
        "day": "31-oct",
        "author": "Friedrich Martin von Bodenstedt",
        "message": "Wer glücklich ist, der ist auch gut, Das zeigt auf jeden Schritt sich; Denn wer auf Erden Böses tut, Trägt seine Strafe mit sich."
    },
    {
        "day": "1-nov",
        "author": "Deutsches Sprichwort",
        "message": "Glück ist der Dummen Vormund."
    },
    {
        "day": "2-nov",
        "author": "Jean Baptiste Racine",
        "message": "Das Glück des Bösen geht dahin wie ein Sturzbach."
    },
    {
        "day": "3-nov",
        "author": "Baltasar Gracián y Morales",
        "message": "Die Höhe der Gunst des Glückes wird oft durch die Kürze ihrer Dauer aufgewogen: denn das Glück wird es müde, einen so lange auf der Schulter zu tragen."
    },
    {
        "day": "4-nov",
        "author": "Luc de Clapiers Vauvenargues",
        "message": "Der Erfolg will gepflegt sein: man muss geschmeidig und unterhaltend sein, intrigieren, den Frauen gefallen, den richtigen Männern schmeicheln, sich in Geschäfte und Vergnügungen stürzen, sich nicht in die Karten sehen lassen, sich bis in die späte Nacht hinein lächelnd langweilen, drei Partien spielen, ohne aufzustehen. Und selbst dann kann man seiner Sache nicht sicher sein. Wie viel Langeweile und Verdruss könnte man sich ersparen, wollte man es versuchen, sein Glück allein auf Verdienste zu gründen!"
    },
    {
        "day": "5-nov",
        "author": "Jean-Jacques Rousseau",
        "message": "Das Gefühl des Glücks zerschmettert den Menschen; er ist nicht stark genug es zu ertragen."
    },
    {
        "day": "6-nov",
        "author": "Deutsches Sprichwort",
        "message": "Wer Glück hat, dem fohlt sogar der Wallach."
    },
    {
        "day": "7-nov",
        "author": "Niccoló Machiavelli",
        "message": "Das Glück ist mehr auf der Seite des Angreifers als auf der desjenigen, der sich verteidigt."
    },
    {
        "day": "8-nov",
        "author": "Leo Tolstoi",
        "message": "Willst du glücklich sein im Leben, dann sei es!"
    },
    {
        "day": "9-nov",
        "author": "Karl August Varnhagen von Ense",
        "message": "Der Mensch fürchtet den Tod nur, weil er noch nicht glücklich genug gewesen ist: im höchsten Glück möchte er gleich hinsterben."
    },
    {
        "day": "10-nov",
        "author": "Friedrich Martin von Bodenstedt",
        "message": "Erfasse das Glück des Lebens im Fluge: Es kommt nicht zurück."
    },
    {
        "day": "11-nov",
        "author": "Miguel de Cervantes",
        "message": "Kluge Leute schonen sich heute für morgen und versuchen ihr ganzes Glück nicht an einem Tage."
    },
    {
        "day": "12-nov",
        "author": "Louis Pasteur",
        "message": "Wer darauf vorbereitet ist, sieht das Glück eher."
    },
    {
        "day": "13-nov",
        "author": "Leo Tolstoi",
        "message": "Das Glück ist mit Müdigkeit und Muskelkater billig erkauft."
    },
    {
        "day": "14-nov",
        "author": "Friedrich von Schiller",
        "message": "Entlasse das Glück, das dir als Sklave hat gedient, eh‘ es sich zürnend selbst befreit, es hasst die Treu‘ und keinem dient es bis ans Ende."
    },
    {
        "day": "15-nov",
        "author": "Arthur Schopenhauer",
        "message": "Ganz glücklich in der Gegenwart hat sich noch nie ein Mensch gefühlt; er wäre denn betrunken gewesen."
    },
    {
        "day": "16-nov",
        "author": "Persisches Sprichwort",
        "message": "Das Glück ist in die Tüchtigen vernarrt."
    },
    {
        "day": "17-nov",
        "author": "Leo Tolstoi",
        "message": "Erst wenn jeder nicht nach irdischem Glück trachtet, sondern geistiges Glück erstrebt, das immer Opfer bedeutet und durch Opfer geprüft wird, erst dann ist das größte Glück aller gewährleistet."
    },
    {
        "day": "18-nov",
        "author": "Aristoteles",
        "message": "Der Sinn des menschlichen Daseins ist das Glück."
    },
    {
        "day": "19-nov",
        "author": "Deutsches Sprichwort",
        "message": "Im Glück sind wir alle geduldig."
    },
    {
        "day": "20-nov",
        "author": "Sully Prudhomme",
        "message": "Nichts ist leichter zu zerstören als das Glück eines Menschen. Es ist das Ergebnis einer unendlichen Reihe von Ursachen und schwer zu fassenden und sehr tief reichenden Bedingungen."
    },
    {
        "day": "21-nov",
        "author": "Hazrat Inayat Khan",
        "message": "Die Seele wird im Sanskrit Atman genannt, was Glück oder Seligkeit bedeutet. Nicht so, dass das Glück zur Seele gehört, nein – die Seele selbst ist Glück."
    },
    {
        "day": "22-nov",
        "author": "Christian Friedrich Hebbel",
        "message": "Glück, sie nennen dich blind und werden nicht müde zu schelten. Frage doch endlich zurück: Könnt ihr den selber auch sehn?"
    },
    {
        "day": "23-nov",
        "author": "Cicero",
        "message": "Ein glückliches Leben besteht immer in erster Linie aus Freiheit von Sorgen."
    },
    {
        "day": "24-nov",
        "author": "Jonathan Swift",
        "message": "Zum Segen des Glücks bekennen sich nur die Unglücklichen; die Glücklichen führen alle ihre Erfolge auf Klugheit und Tüchtigkeit zurück."
    },
    {
        "day": "25-nov",
        "author": "Sully Prudhomme",
        "message": "Was vergänglich ist und dem Zufall unterworfen, kann nie Quelle des Glücks sein; man darf das Glück, wenn es von Dauer sein soll, nicht mit dem notwendigerweise flüchtigen Vergnügen verwechseln. Wir müssen also das Glück in den unzerstörbaren Dingen suchen."
    },
    {
        "day": "26-nov",
        "author": "Gottfried Keller",
        "message": "Wo das Glück einmal einkehrt, da greift es leicht um sich."
    },
    {
        "day": "27-nov",
        "author": "Cornelius Nepos",
        "message": "Jedes Menschen Glück schmiedet ihm sein Charakter."
    },
    {
        "day": "28-nov",
        "author": "Französisches Sprichwort",
        "message": "Glück ist meistens ganz gewöhnliches Leitungswasser, das nach Champagner schmeckt."
    },
    {
        "day": "29-nov",
        "author": "Friedrich Bouterwek",
        "message": "Ist dir die Einsamkeit gute Gesellschaft, dann, Glücklicher, zähle zu den Glücklichsten dich; aber verschweige dein Glück."
    },
    {
        "day": "30-nov",
        "author": "Hazrat Inayat Khan",
        "message": "Heute verwechseln wir oft Glück mit Vergnügen, aber Vergnügen ist nur eine Illusion, ein Schatten des Glücks; und es kann sein, dass der Mensch in dieser Illusion sein ganzes Leben verbringt, immer wieder Vergnügen suchend und doch niemals Befriedigung findend."
    },
    {
        "day": "1-dec",
        "author": "Johann Heinrich Pestalozzi",
        "message": "Das Glück, das vor der Not kommt, ist ein verführerischer Teufel. Das Glück, das hinter der Not kommt, ist ein rettender Engel."
    },
    {
        "day": "2-dec",
        "author": "Julius Stinde",
        "message": "Das Glück hat keine Stätte, und wir sind nur glücklich, so lange wir es suchen."
    },
    {
        "day": "3-dec",
        "author": "Leo Tolstoi",
        "message": "Alle haben es gleich. Wie man in einem See an keiner Stelle die Wasseroberfläche höher oder niedriger machen kann als an anderen Stellen, so kann man auch das Glück nicht durch materielle Mittel vermehren oder vermindern."
    },
    {
        "day": "4-dec",
        "author": "Nicolas Chamfort",
        "message": "Sollte das Glück sich mit mir einlassen, so muss es die Bedingungen annehmen, die mein Charakter ihm stellt."
    },
    {
        "day": "5-dec",
        "author": "Catull",
        "message": "Was ist glückseliger, als frei von Sorgen zu sein!"
    },
    {
        "day": "6-dec",
        "author": "Théodore Simon Jouffrouy",
        "message": "Man verbringt die eine Hälfte des Lebens damit, sich Glück zu erhoffen, und eine andere, eine Hoffnung zu vermissen."
    },
    {
        "day": "7-dec",
        "author": "Niccoló Machiavelli",
        "message": "Ich habe meine Lebensweise so eingerichtet, dass ich bereit bin, das Glück zu ergreifen, wenn es kommen sollte, und wenn es nicht kommt, mich in Geduld zu fassen."
    },
    {
        "day": "8-dec",
        "author": "Abraham Lincoln",
        "message": "Ein Mensch ist so glücklich, wie er es beschließt zu sein."
    },
    {
        "day": "9-dec",
        "author": "Isländisches Sprichwort",
        "message": "Suche das Glück nicht mit dem Fernrohr."
    },
    {
        "day": "10-dec",
        "author": "Schlomo ibn Gewirol",
        "message": "Um Glück zu erreichen, muss der Mensch seine eigene Seele zähmen und beherrschen."
    },
    {
        "day": "11-dec",
        "author": "Cäsar",
        "message": "Das beste Glück: ein schöner Blick, ein kluger Scherz, ein redlich Herz!"
    },
    {
        "day": "12-dec",
        "author": "Niccoló Machiavelli",
        "message": "Es ist unmöglich, einen Mann, dem durch seine Art zu verfahren viel geglückt ist, zu überzeugen, er könne gut daran tun, anders zu verfahren. Daher kommt es, dass das Glück eines Mannes Wechselt, denn die Zeiten wechseln, er aber wechselt nicht sein Verfahren."
    },
    {
        "day": "13-dec",
        "author": "William Shakespeare",
        "message": "Ich wäre nur wenig glücklich, wenn ich sagen könnte, wie sehr ich es bin."
    },
    {
        "day": "14-dec",
        "author": "Japanisches Sprichwort",
        "message": "Glück, das ist in beiden Händen Blumen halten."
    },
    {
        "day": "15-dec",
        "author": "Baltasar Gracián y Morales",
        "message": "Ein lange anhaltendes Glück ist allemal verdächtig."
    },
    {
        "day": "16-dec",
        "author": "François de la Rochefoucauld",
        "message": "Das Glück lenkt alles zum Vorteil seiner Günstlinge."
    },
    {
        "day": "17-dec",
        "author": "Englisches Sprichwort",
        "message": "Es ist nicht leicht, Glück mit Anstand zu tragen."
    },
    {
        "day": "18-dec",
        "author": "Cicero",
        "message": "Die Göttin das Glücks ist nicht nur selber blind, sondern meistens macht sie auch diejenigen blind, die sie umgarnt hat."
    },
    {
        "day": "19-dec",
        "author": "Fjodor Michailowitsch Dostojewski",
        "message": "Die Pflicht, unbedingt wenigstens einen Menschen in seinem Leben glücklich zu machen, und zwar praktisch, das heißt: in Wirklichkeit würde ich sie für jeden entwickelten Menschen einfach zum Gebot erheben."
    },
    {
        "day": "20-dec",
        "author": "François de la Rochefoucauld",
        "message": "Unser Stimmung gibt allen Gaben des Glücks ihren Wert."
    },
    {
        "day": "21-dec",
        "author": "Friedrich von Schiller",
        "message": "Zürne dem Glücklichen nicht, dass den leichten Sieg ihm die Götter schenken, dass aus der Schlacht Venus den Liebling entrückt."
    },
    {
        "day": "22-dec",
        "author": "Theodor Fontane",
        "message": "Es ist und bleibt ein Glück, vielleicht das Höchste, frei atmen zu können."
    },
    {
        "day": "23-dec",
        "author": "Ammianus Marcellinus",
        "message": "Doch Fortunas schnelles Rad bringt abwechselnd Glück und Unglück."
    },
    {
        "day": "24-dec",
        "author": "Johann Wolfgang von Goethe",
        "message": "Das größte Glück und höchste Unglück sind nur kleine Abweichungen von dem Gewöhnlichen."
    },
    {
        "day": "25-dec",
        "author": "Fjodor Michailowitsch Dostojewski",
        "message": "Wozu die Tage zählen! Dem Menschen genügt ja ein einziger Tag, um das ganze Glück zu erfahren."
    },
    {
        "day": "26-dec",
        "author": "Mark Twain",
        "message": "Glück ist keine Sache für sich – es ist lediglich ein Gegensatz zu dem, was unerfreulich ist. Das ist der ganze Trick."
    },
    {
        "day": "27-dec",
        "author": "Sir Francis Bacon",
        "message": "Der Pfad des Glückes gleicht der Milchstraße am Himmel, die eine Anhäufung oder ein Knäuel von einer Anzahl kleiner, nicht einzeln wahrnehmbarer, doch im Verein lichtstrahlender Sterne ist."
    },
    {
        "day": "28-dec",
        "author": "Gottfried Keller",
        "message": "Ruhig, mit nur wenigen Meisterschlägen schmiedet der rechte Mann sein Glück!"
    },
    {
        "day": "29-dec",
        "author": "Heinrich Heine",
        "message": "In uns selbst liegen die Sterne unseres Glücks."
    },
    {
        "day": "30-dec",
        "author": "Johann Wolfgang von Goethe",
        "message": "Der Anblick eines wahrhaft Glücklichen macht glücklich."
    },
    {
        "day": "31-dec",
        "author": "Volksweisheit",
        "message": "Willst du glücklich sein im Leben, trage bei zu andrer Glück, denn die Freude, die wir geben, kehrt ins eigne Herz zurück."
    }
    ],
    love: [
    {
        "day": "1-jan",
        "author": "Peter Sirius",
        "message": "Des Lebens seligstes Bewusstsein ist es, sich in einem andern lebendig zu wissen."
    },
    {
        "day": "2-jan",
        "author": "Henri Stendhal",
        "message": "So sehr die leidenschaftliche Liebe unseren Vorteil außer Acht lässt, so gut weiß die gepflegte Liebe ihn zu berechnen."
    },
    {
        "day": "3-jan",
        "author": "Honoré de Balzac",
        "message": "Liebe ohne Besitz lebt von der äußersten Anspannung ihrer Sehnsucht."
    },
    {
        "day": "4-jan",
        "author": "François de la Rochefoucauld",
        "message": "Man geht oft von der Liebe zum Ehrgeiz über, aber selten kehrt man vom Ehrgeiz zur Liebe zurück."
    },
    {
        "day": "5-jan",
        "author": "Peter Rosegger",
        "message": "Das Hauptmerkmal echter Liebe ist das Mitleid. Die Sinnlichkeit fügt das Rad zusammen, das Mitleid legt den Reifen darüber."
    },
    {
        "day": "6-jan",
        "author": "Emanuel Wertheimer",
        "message": "In der Liebe ist der Weg alles. Und das Ziel? ... entfernt vom Wege."
    },
    {
        "day": "7-jan",
        "author": "Heinrich Laube",
        "message": "Das ist ja das Wesen der Liebe, dass man sich immer bereit fühlt, beizustimmen oder wenigstens zu helfen. Das Beste unseres Geistes wächst ja immerdar aus unseren Herzen."
    },
    {
        "day": "8-jan",
        "author": "Hildegard von Bingen",
        "message": "Die Liebe vernichtet alles Böse und macht frei von aller Angst."
    },
    {
        "day": "9-jan",
        "author": "Joseph Victor von Scheffel",
        "message": "Andre Zeiten – andre Bilder Andre Zeiten - andre Lieder, Doch die Liebe überdauert alle Zeiten."
    },
    {
        "day": "10-jan",
        "author": "Lebensweisheit",
        "message": "Wen die Liebe treibt der braucht keinen Sporn."
    },
    {
        "day": "11-jan",
        "author": "Zopyrus",
        "message": "Keiner meiner Freunde soll mit Eros unbekannt sein, sondern ihn halten, wo er ihm begegnet."
    },
    {
        "day": "12-jan",
        "author": "Friedrich Daab",
        "message": "Denn das ist die Kraft und Seligkeit der Liebe, nicht dass wir geliebt werden, sondern dass wir lieben dürfen."
    },
    {
        "day": "13-jan",
        "author": "Friedrich von Schlegel",
        "message": "Liebst du wohl, wenn du nicht die Welt in dem Geliebten findest?"
    },
    {
        "day": "14-jan",
        "author": "Ignatius von Loyola",
        "message": "Eines der Dinge, in denen wir uns gründen müssen, um unserem Herrn zu gefallen, wird darin bestehen, alle Dinge von uns zu weisen, die uns von der Liebe zu den Brüdern trennen können, indem wir uns mühen, sie mit herzlicher Liebe zu lieben."
    },
    {
        "day": "15-jan",
        "author": "Wladimir Majakowski",
        "message": "Die Liebe ist das Leben, ist das Wesentliche Aus ihr entfalten sich die Verse, die Taten und alles Übrige. Die Liebe ist das Herz des Ganzen. Sobald dieses seine Arbeit einstellt, stirbt alles Übrige ab, wird überflüssig, unnütz."
    },
    {
        "day": "16-jan",
        "author": "Hippokrates",
        "message": "Wo Liebe zum Menschen vorhanden, da ist auch Liebe zur Kunst vorhanden."
    },
    {
        "day": "17-jan",
        "author": "Bertha von Suttner",
        "message": "Jede Liebe verzehnfacht jede Kraft."
    },
    {
        "day": "18-jan",
        "author": "Gustave Flaubert",
        "message": "Die Liebe zu träumen, heißt alles zu träumen; es ist die Unendlichkeit des Glücks, das Mysterium der Lust."
    },
    {
        "day": "19-jan",
        "author": "Christine von Schweden",
        "message": "Lebt die Liebe nur als Pflicht, ist sie tot."
    },
    {
        "day": "20-jan",
        "author": "Jonathan Swift",
        "message": "Liebe, die mit der Galle übermäßiger Vorsicht durchsetzt ist, ist tausendmal schlimmer als überhaupt keine Liebe."
    },
    {
        "day": "21-jan",
        "author": "Richard Wagner",
        "message": "In Wasser, Erd und Luft Lassen will nichts von Lieb und Weib."
    },
    {
        "day": "22-jan",
        "author": "Die Bibel",
        "message": "Er führte mich in das Weinhaus, und des Hauses Fahne über mir war Liebe."
    },
    {
        "day": "23-jan",
        "author": "Józef Ignacy Kraszewski",
        "message": "Eine erbärmliche Liebe, die man an der Leine und im Zaum halten muss."
    },
    {
        "day": "24-jan",
        "author": "Ludwig Uhland",
        "message": "Ich liebte sie, sie liebte mich, Doch keines sagt: »Ich liebe dich!«"
    },
    {
        "day": "25-jan",
        "author": "Jean Paul",
        "message": "Bei der Geliebten nur darf man von sich reden."
    },
    {
        "day": "26-jan",
        "author": "Ignatius von Loyola",
        "message": "Die Liebe besteht in der Kommunikation von beiden Seiten, nämlich darin, dass der Liebende dem Geliebten gibt und mitteilt, was er hat, oder von dem, was er hat oder kann; und genauso umgekehrt der Geliebte dem Liebenden."
    },
    {
        "day": "27-jan",
        "author": "Gustav Körner",
        "message": "Die Liebe hat kein Maß der Zeit: sie keimt und blüht und reift in einer schönen Stunde."
    },
    {
        "day": "28-jan",
        "author": "Ninon de Lenclos",
        "message": "Die Liebe ist wie das Geld, ein guter Diener und ein schlechter Herr."
    },
    {
        "day": "29-jan",
        "author": "Theodor Gottlieb von Hippel",
        "message": "Die Liebe ist der Hauptschlüssel, der alles beim Menschen aufschließt."
    },
    {
        "day": "30-jan",
        "author": "Louise Labé",
        "message": "Das zweitgrößte Vergnügen nach der Liebe ist: darüber zu sprechen."
    },
    {
        "day": "31-jan",
        "author": "Annie Besant",
        "message": "Die Wurzel der Liebe ist in der Ewigkeit."
    },
    {
        "day": "1-feb",
        "author": "Spanisches Sprichwort",
        "message": "Einem, der Liebe sucht Freundschaft anzubieten, ist wie einem Verdurstenden Brot zu geben."
    },
    {
        "day": "2-feb",
        "author": "François de la Rochefoucauld",
        "message": "Bei der Eifersucht zeigt sich mehr Eigenliebe als Liebe."
    },
    {
        "day": "3-feb",
        "author": "Katharina von Siena",
        "message": "Der Mensch wird durch nichts anderes mehr gepackt als durch Liebe und Güte."
    },
    {
        "day": "4-feb",
        "author": "Michelangelo",
        "message": "Wer sich mit Liebe wappnet, überwindet Zorn, Elend, Übermacht und Missgeschick."
    },
    {
        "day": "5-feb",
        "author": "Francesco Petrarca",
        "message": "Es ist ein großer Unterschied, ob ich etwas weiß oder ob ich es liebe; ob ich es verstehe oder ob ich nach ihm strebe."
    },
    {
        "day": "6-feb",
        "author": "Wilhelm Ludwig Weckherlin",
        "message": "Liebe lässt sich nie gebieten."
    },
    {
        "day": "7-feb",
        "author": "Indisches Sprichwort",
        "message": "Der Erwachsene achtet Kind auf auf Taten, das Liebe."
    },
    {
        "day": "8-feb",
        "author": "Aristoteles",
        "message": "Wenn auf der Erde die Liebe herrschte, wären alle Gesetze entbehrlich."
    },
    {
        "day": "9-feb",
        "author": "Peter Altenberg",
        "message": "Die große Liebe ist nichts anderes als ein Seiltanz von Amateuren ohne Balancierstange und ohne Netz."
    },
    {
        "day": "10-feb",
        "author": "Roger de Bussy-Rabutin",
        "message": "Die Liebe beginnt gern von vorn und wird nicht müde, sich zu wiederholen."
    },
    {
        "day": "11-feb",
        "author": "Giacomo Casanova",
        "message": "Die Liebe besteht zu drei Vierteln aus Neugier."
    },
    {
        "day": "12-feb",
        "author": "Friedrich Nietzsche",
        "message": "Was aus Liebe getan wird, geschieht immer jenseits von Gut und Böse."
    },
    {
        "day": "13-feb",
        "author": "Oscar Wilde",
        "message": "Sich selbst zu lieben ist der Beginn einer lebenslangen Romanze."
    },
    {
        "day": "14-feb",
        "author": "Johann Wolfgang von Goethe",
        "message": "Freiwillige Abhängigkeit ist der schönste Zustand, und wie wäre der möglich ohne Liebe?"
    },
    {
        "day": "15-feb",
        "author": "Friedrich von Schiller",
        "message": "Treue Lieb hilft alle Laster heben."
    },
    {
        "day": "16-feb",
        "author": "Augustinus",
        "message": "So viel in dir die Liebe wächst, so viel wächst die Schönheit in dir. Denn die Liebe ist die Schönheit der Seele."
    },
    {
        "day": "17-feb",
        "author": "Hugo von Hofmannsthal",
        "message": "Aufmerksamkeit und Liebe bedingen einander wechselseitig."
    },
    {
        "day": "18-feb",
        "author": "Charles Dickens",
        "message": "Gibt es schließlich eine bessere Form, mit dem Leben fertig zu werden, als mit Liebe und Humor?"
    },
    {
        "day": "19-feb",
        "author": "Ludwig Feuerbach",
        "message": "Je mehr du von deinem Selbst aufgibst, desto größer und wahrer ist deine Liebe."
    },
    {
        "day": "20-feb",
        "author": "John Donne",
        "message": "Auf Schönheit gebaute Liebe stirbt so schnell wie die Schönheit."
    },
    {
        "day": "21-feb",
        "author": "Miguel de Cervantes",
        "message": "Wenn sie gut ist, ist die Liebe der Wunsch nach dem Besseren; wenn dieser fehlt, ist sie zügellose Begier."
    },
    {
        "day": "22-feb",
        "author": "Russisches Sprichwort",
        "message": "Die Liebe ist kein Schadenfeuer; aber ist sie entbrannt, kann man sie nicht mehr löschen."
    },
    {
        "day": "23-feb",
        "author": "Joseph Addison",
        "message": "Um im Leben glücklich zu sein, brauchen wir etwas zu arbeiten, etwas zu lieben und etwas, auf das wir hoffen können."
    },
    {
        "day": "24-feb",
        "author": "William Shakespeare",
        "message": "Die Liebe ist nur eine Aufwallung des Bluts und eine Nachgiebigkeit des Willens."
    },
    {
        "day": "25-feb",
        "author": "Friedrich von Schiller",
        "message": "Wenn ich hasse, nehme ich mir etwas; wenn ich liebe, werde ich um das reicher, was ich liebe."
    },
    {
        "day": "26-feb",
        "author": "Ludwig Börne",
        "message": "Die wahre Liebe würdigt ihren Die Gegenstand; aber das ist die wahre Liebe nicht, die nur das Würdige liebt."
    },
    {
        "day": "27-feb",
        "author": "Ralph Waldo Emerson",
        "message": "Die Liebe ist das Licht und der Trost des Lebens."
    },
    {
        "day": "28-feb",
        "author": "Russisches Sprichwort",
        "message": "Der Verstand wird durch Wahrheit erleuchtet, das Herz wird durch Liebe erwärmt."
    },
    {
        "day": "29-feb",
        "author": "Annie Besant",
        "message": "Göttliche Liebe: es ist dies jene Liebe, die alles gibt und nichts begehrt."
    },
    {
        "day": "1-mar",
        "author": "Gotthold Ephraim Lessing",
        "message": "Mann muss ganz uneigennützig lieben."
    },
    {
        "day": "2-mar",
        "author": "Die Bibel",
        "message": "Die Liebe ist langmütig, ist gütig; die Liebe neidet nicht; die Liebe tut nicht groß, sie bläht sich nicht auf, sie gebärdet sich nicht unanständig, sie sucht nicht das Ihrige, sie lässt sich nicht erbittern, sie rechnet Böses nicht zu, sie freut sich nicht über die Ungerechtigkeit, sondern sie freut sich mit der Wahrheit, sie erträgt alles, sie glaubt alles, sie hofft alles, sie erduldet alles."
    },
    {
        "day": "3-mar",
        "author": "George Sand",
        "message": "Wer Liebe sucht findet sie nicht; sie überfällt uns, wenn wir sie nicht erwarten."
    },
    {
        "day": "4-mar",
        "author": "Fjodor Michailowitsch Dostojewski",
        "message": "Einen Menschen zu lieben bedeutet, ihn so zu sehen, wie Gott ihn gemeint hat."
    },
    {
        "day": "5-mar",
        "author": "Vergil",
        "message": "Die Liebe besiegt alles, lasst auch uns der Liebe nachgeben!"
    },
    {
        "day": "6-mar",
        "author": "Gottfried Traub",
        "message": "Es bleibt das Vorrecht der Liebe, Böses zu überwinden."
    },
    {
        "day": "7-mar",
        "author": "Miguel de Cervantes",
        "message": "Sag, wie sich die Liebe nährt? Sie gewährt."
    },
    {
        "day": "8-mar",
        "author": "Peter Rosegger",
        "message": "Es ist eine göttliche Gegenseitigkeit, wen man lieb hat, dem tut man Gutes, und wem man Gutes tut, den hat man noch mehr lieb."
    },
    {
        "day": "9-mar",
        "author": "Christine von Schweden",
        "message": "Die wahre Liebe ist beständig, sei sie glücklich oder unglücklich."
    },
    {
        "day": "10-mar",
        "author": "Multatuli",
        "message": "Um lieb zu haben muss man gut sein."
    },
    {
        "day": "11-mar",
        "author": "Karl Ferdinand Gutzkow",
        "message": "Nur die Liebe bedarf keines Buches. Sie liest die größten Schätze der Weisheit und der Wahrheit im Auge der Geliebten."
    },
    {
        "day": "12-mar",
        "author": "Meister Eckhart",
        "message": "Es gibt keinen besseren Maßstab der Liebe als Vertrauen. Wenn man einen anderen herzlich und hingegeben liebt, so ist damit das Vertrauen von selber gesetzt. Liebe kann nicht misstrauen sie gewährt nur Gutes."
    },
    {
        "day": "13-mar",
        "author": "Jean-Jacques Rousseau",
        "message": "Liebe, der Seele Leben!"
    },
    {
        "day": "14-mar",
        "author": "Siegfried August Mahlmann",
        "message": "Nimm mir die Liebe, was bin ich? Der Ärmste unter den Armen! Lass mir die Liebe, ich bin reicher als Könige sind."
    },
    {
        "day": "15-mar",
        "author": "Augustinus",
        "message": "Die Macht der Liebe wächst immerdar, weil sie durch die Übung größer und durch Freigebigkeit reicher wird."
    },
    {
        "day": "16-mar",
        "author": "Adolf Stahr",
        "message": "Was man auch klügeln und sagen mag: es ist etwas an der Unvergleichlichkeit und Einzigkeit der »ersten Liebe«, an jenem wunderbaren Zauber erster Liebesempfindung, der, einmal dahin, nimmer wiederkehrt, so wenig wie die Jugend selbst, deren Kind die erste Liebe ist!"
    },
    {
        "day": "17-mar",
        "author": "Karl Detlef",
        "message": "Wir lieben die, die mit uns weinen."
    },
    {
        "day": "18-mar",
        "author": "Johann Wolfgang von Goethe",
        "message": "In einem Augenblick gewährt die Liebe, was Mühe kaum in langer Zeit erreicht."
    },
    {
        "day": "19-mar",
        "author": "Berthold Auerbach",
        "message": "Bei einem echten Menschen heißt kennen lernen: lieben lernen."
    },
    {
        "day": "20-mar",
        "author": "Angelus Silesius",
        "message": "Liebe, die du mich zum Bilde deiner Gottheit hast gemacht."
    },
    {
        "day": "21-mar",
        "author": "Jean Paul",
        "message": "Liebe ist ein Auszug aus allen Leidenschaften auf einmal."
    },
    {
        "day": "22-mar",
        "author": "Fritz Reuter",
        "message": "Sie hat im Leben Liebe gesäet sie soll im Tode Liebe ernten."
    },
    {
        "day": "23-mar",
        "author": "Muhammad al-Ghazali",
        "message": "Geprüft wird die Liebe durch den Wettstreit mit dem eigenen Vorteil."
    },
    {
        "day": "24-mar",
        "author": "Oscar Wilde",
        "message": "Liebe auf den ersten Blick - das geht über alle Erfahrung hinaus."
    },
    {
        "day": "25-mar",
        "author": "August von Kotzebue",
        "message": "Wer über die Liebe nachdenkt, der liebt nicht mehr."
    },
    {
        "day": "26-mar",
        "author": "François de la Rochefoucauld",
        "message": "Es ist unmöglich, zum zweiten Mal zu lieben, was man zu lieben wirklich aufgehört hat."
    },
    {
        "day": "27-mar",
        "author": "Friedrich Rückert",
        "message": "Nicht der in der Welt verwaist Dessen Vater und Mutter gestorben, Sondern, der für Herz und Geist Kein Lieb' und Wissen erworben."
    },
    {
        "day": "28-mar",
        "author": "Henri Stendhal",
        "message": "Es ist ein Zeichen für die Entstehung der Liebe, dass alle Freude und Leiden, die jede andere Leidenschaft, jedes andere menschliche Bedürfnis hervorruft, uns plötzlich nicht mehr berühren."
    },
    {
        "day": "29-mar",
        "author": "Baruch de Spinoza",
        "message": "Die Herzen werden nicht durch Waffen, sondern durch Liebe und Edelmut gewonnen."
    },
    {
        "day": "30-mar",
        "author": "Alexander Iwanowitsch Herzen",
        "message": "Nur die Liebe schafft Bleibendes und Lebendiges."
    },
    {
        "day": "31-mar",
        "author": "Thomas von Kempen",
        "message": "Was aber aus Liebe geschieht, das ist groß, das bringt reiche Frucht, so gering und ungeachtet es im Auge des Menschen immer sein mag."
    },
    {
        "day": "1-apr",
        "author": "Charles Joseph de Ligne",
        "message": "Eine unglückliche Liebe gleicht dem hohen Fieber, das nicht lange zu währen pflegt. Eine glückliche Liebe dagegen ist ein entzückender und andauernder Traum."
    },
    {
        "day": "2-apr",
        "author": "Friedrich von Schiller",
        "message": "Liebe zielt nach Einheit."
    },
    {
        "day": "3-apr",
        "author": "Peter Rosegger",
        "message": "Es gibt eine Autorität, die mit sanfter Gewalt die tollen Herzen bändigt - diese Autorität heißt Liebe."
    },
    {
        "day": "4-apr",
        "author": "Johann Georg Hamann",
        "message": "Auf Schwächen und Blößen gründet sich die Liebe und auf diese die Fruchtbarkeit."
    },
    {
        "day": "5-apr",
        "author": "Jules Michelet",
        "message": "Es gibt in der Liebe nichts Mittelmäßiges und nichts Untergeordnetes."
    },
    {
        "day": "6-apr",
        "author": "Henri Stendhal",
        "message": "Wie sonderbar ist doch unser menschliches Herz: Die geliebte Frau gewährt uns immer viel mehr Reize, als sie in Wirklichkeit besitzt."
    },
    {
        "day": "7-apr",
        "author": "William Congreve",
        "message": "In der Liebe kann selbst Schweigen beredt sein."
    },
    {
        "day": "8-apr",
        "author": "Franz von Baader",
        "message": "Liebe ist Ordnung und verlangt nach Ordnung. Man verlangt nicht, ohne verlangt zu werden."
    },
    {
        "day": "9-apr",
        "author": "Jeremias Gotthelf",
        "message": "Es ist doch schön auf der Welt wo Liebe ist!"
    },
    {
        "day": "10-apr",
        "author": "Thomas von Kempen",
        "message": "Die Liebe erfordert eine Ordnung, dass ein Teil dem andern sein Kreuz tragen helfe und mitleidig sei."
    },
    {
        "day": "11-apr",
        "author": "Fjodor Iwanowitsch Schaljapin",
        "message": "Liebe bedeutet immer Glück, wem diese Liebe auch gehören mag."
    },
    {
        "day": "12-apr",
        "author": "Friedrich Spielhagen",
        "message": "Wir sündigen, wenn wir dem Gesetze nicht folgen, das uns regiert, wenn wir der Liebe nicht folgen. Sie ist das allgewaltige Band, das alle Geschlechter der erdgeborenen Menschen vom Anfang bis zum Ende zusammengehalten hat und halten wird, die allmächtige Sonne, vor deren holdem Strahl es wieder lenzen muss auch in dem dunkelsten, trübsten Herzen."
    },
    {
        "day": "13-apr",
        "author": "Karl Detlef",
        "message": "Es ist so Wundervoll süß, jemanden zu lieben, der dieser Liebe würdig ist!"
    },
    {
        "day": "14-apr",
        "author": "Peter Rosegger",
        "message": "Im Heiraten hat man die Wahl, in der Liebe hat man keine."
    },
    {
        "day": "15-apr",
        "author": "Jean Paul",
        "message": "Zur sinnlichen Liebe ist bei den meisten leicht zu gelangen; aber schwer bei wenigen ist die rechte zu erwerben."
    },
    {
        "day": "16-apr",
        "author": "Friedrich Christoph Perthes",
        "message": "ich bin ein Knecht, wenn ich nicht liebe, und ich kann nicht lieben, wenn ich ein Knecht bin. Wer liebt, weiß, was kein anderer weiß: dass die eigene Freiheit und der Wille Gottes ein und dasselbe sind."
    },
    {
        "day": "17-apr",
        "author": "Dante Alighieri",
        "message": "Die Liebe zwang noch stets zur Gegenliebe."
    },
    {
        "day": "18-apr",
        "author": "Peter Rosegger",
        "message": "Die Liebe ist das ewige Licht."
    },
    {
        "day": "19-apr",
        "author": "John Ruskin",
        "message": "Die Liebe fürchten heißt, das Leben fürchten. und wer das Leben fürchtet, ist schon zu drei Vierteln tot."
    },
    {
        "day": "20-apr",
        "author": "Alfred de Musset",
        "message": "Liebe ist etwas Großes, man brauch Mut zur Liebe."
    },
    {
        "day": "21-apr",
        "author": "Claire von Glümer",
        "message": "Die Liebe ist nicht zu lenken und zu löschen."
    },
    {
        "day": "22-apr",
        "author": "Goran Khalil Gibran",
        "message": "Wie schwer ist das Leben für den, der nach Liebe verlangt und Leidenschaft erhält!"
    },
    {
        "day": "23-apr",
        "author": "Johannes Chrysostomus",
        "message": "Schöpferin aller Tugenden ist die Liebe."
    },
    {
        "day": "24-apr",
        "author": "Johann Wolfgang von Goethe",
        "message": "Ach, die Erde kühlt die Liebe nicht."
    },
    {
        "day": "25-apr",
        "author": "Bernart de Ventadorn",
        "message": "Tot ist der Mensch, dem der Genuss Der Liebe nicht das Herz beseelt; Ein Leben, dem die Liebe fehlt, Gereicht der Welt nur zum Verdruss."
    },
    {
        "day": "26-apr",
        "author": "Pubilius Syrus",
        "message": "Die Liebe wie die Fackel brennt stärker durch Bewegung."
    },
    {
        "day": "27-apr",
        "author": "Franz von Sales",
        "message": "Alles aus Liebe, nichts aus Zwang."
    },
    {
        "day": "28-apr",
        "author": "Román de Campoamor y Campoosorio",
        "message": "Sage der Zeit, o Herr, sie möge mir diese Liebe nicht aus dem Herzen reißen, denn das hieße, mir das Leben entreißen."
    },
    {
        "day": "29-apr",
        "author": "Ovid",
        "message": "Nur der wird geliebt, dem immer günstig das Glück ist."
    },
    {
        "day": "30-apr",
        "author": "Guido Guinicelli",
        "message": "Im edlen Herzen nur wohnt wahre Liebe."
    },
    {
        "day": "1-may",
        "author": "Lord Bulwer-Lytton",
        "message": "Aus der Liebe schöpft die Frau ihr edles Sein. Für den, den sie liebt, ist sie mild wie eine Taube, fromm wie eine Heilige; für seine Sicherheit Gefahr saugt ihr sanftes Gemüt den Scharfsinn einer Schlange, ihr schwaches Herz den Mut einer Löwin ein."
    },
    {
        "day": "2-may",
        "author": "Johann Wolfgang von Goethe",
        "message": "In der Liebe mag man nie Helfer und Gesellen."
    },
    {
        "day": "3-may",
        "author": "Otto von Leixner",
        "message": "Von niemandem geliebt zu sein, großes Leid! Niemanden lieben können: Tod mitten im Leben."
    },
    {
        "day": "4-may",
        "author": "Pedro Calderón de la Barca",
        "message": "Alle Schätze der Welt wiegen das Glück nicht auf, geliebt zu werden."
    },
    {
        "day": "5-may",
        "author": "Johann Wolfgang von Goethe",
        "message": "Der Schmerz um Liebe, wie die Liebe, bleibt unheilbar und unendlich."
    },
    {
        "day": "6-may",
        "author": "Dante Alighieri",
        "message": "Schwach ist die Liebe, die sich noch in Worten ausdrücken lässt."
    },
    {
        "day": "7-may",
        "author": "Plinius der Jüngere",
        "message": "Die Liebe ist der beste Lehrer."
    },
    {
        "day": "8-may",
        "author": "William Shokespeare",
        "message": "April ist dir im Aug', der Liebe Lenz, Und Tränen sind der Regen, die ihn künden."
    },
    {
        "day": "9-may",
        "author": "Rudolf von Gottschall",
        "message": "Liebe ist Treue, Treue gegen den Einzigen, der unser Herz erfüllt! Da gibt's kein Schwanken, kein Wanken und Feilschen; und dies beseligende Gefühl eines erreichbaren Besitzes trägt uns über alle Schranken hinweg."
    },
    {
        "day": "10-may",
        "author": "Ernst Eckstein",
        "message": "Wo noch Liebe ist, da kann alles wieder gut werden."
    },
    {
        "day": "11-may",
        "author": "William Shakespeare",
        "message": "Verliebte laufen stets der Zeit voraus."
    },
    {
        "day": "12-may",
        "author": "Christine von Schweden",
        "message": "So wie wir selbst beschaffen sind, ist auch unsere Liebe beschaffen."
    },
    {
        "day": "13-may",
        "author": "Elise Polko",
        "message": "Je glühender das Herz, desto verhüllter die Liebe!"
    },
    {
        "day": "14-may",
        "author": "Wilhelm Hein",
        "message": "Liebe kritisiert nie. Sie nimmt das Gute, wie's kommt, und entschuldigt das Böse ohne Vorbedacht."
    },
    {
        "day": "15-may",
        "author": "Friedrich von Schiller",
        "message": "Wohl darf die die Liebe werben um die Liebe."
    },
    {
        "day": "16-may",
        "author": "Maulana Abdul Rahman Dschami",
        "message": "Wenn auch dein Mund nie das Geheimnis bricht, Zweihundert Schleier hüllen Liebe nicht."
    },
    {
        "day": "17-may",
        "author": "Georg Herwegh",
        "message": "Ich habe mich oft und lange gegen die Liebe gewehrt; nun hat michs gepackt, nun will ich auch von keiner Teilung meines Wesens zwischen der Welt und meiner Liebe wissen, nun will ich lieben, nichts als lieben."
    },
    {
        "day": "18-may",
        "author": "Die Bibel",
        "message": "Die Liebe tut dem nächsten nichts Böses."
    },
    {
        "day": "19-may",
        "author": "Johann Wolfgang von Goethe",
        "message": "Durch ein paar Züge aus dem Becher der Liebe hält die Natur für ein Leben voll Mühe schadlos."
    },
    {
        "day": "20-may",
        "author": "Hildegard von Bingen",
        "message": "Die Liebe ist in allen Dingen gleichsam die Seele und das Auge. In dieser Liebe schließt sich der Lauf der Welt. Liebe ist die volle Wirklichkeit des Guten."
    },
    {
        "day": "21-may",
        "author": "Friedrich von Schiller",
        "message": "Mein Herz, versprech ich Ihnen, soll allein und ewig, der Richter meiner Liebe sein."
    },
    {
        "day": "22-may",
        "author": "Aus: Des Knaben Wunderhorn",
        "message": "Rosendornen stechen sehr: falsche Liebe noch viel mehr."
    },
    {
        "day": "23-may",
        "author": "Novalis",
        "message": "Die Liebe ist frei. Sie wählt das Ärmste und Hilfsbedürftige am liebsten."
    },
    {
        "day": "24-may",
        "author": "Theodor Lessing",
        "message": "Der liebt niemanden, der nur seinesgleichen liebt."
    },
    {
        "day": "25-may",
        "author": "John Keats",
        "message": "Du kannst keinen Schritt gehen noch einen Lidschlag tun, ohne dass es mir einen Stich ins Herz gibt."
    },
    {
        "day": "26-may",
        "author": "William Shakespeare",
        "message": "Wo man Liebe aussät, da wächst Freude empor."
    },
    {
        "day": "27-may",
        "author": "Franz von Sales",
        "message": "Ich liebe und werde geliebt, also bin ich."
    },
    {
        "day": "28-may",
        "author": "Johann Wolfgang von Goethe",
        "message": "Die Liebe nennt sich zuerst Vertraulichkeit."
    },
    {
        "day": "29-may",
        "author": "Gottfried von Straßburg",
        "message": "Lieb ist selig allezeit, Ein Ringen so voll Seligkeit, Dass ohne ihre Lehre Nicht Tugend ist, noch Ehre."
    },
    {
        "day": "30-may",
        "author": "Józef Ignacy Kraszewski",
        "message": "Liebe hat die Eigenart, nicht vernünftig sein zu können."
    },
    {
        "day": "31-may",
        "author": "Julie de Lespinasse",
        "message": "Das große Glück der Liebe besteht darin, Ruhe in einem anderen Herzen zu finden."
    },
    {
        "day": "1-jun",
        "author": "Philipp Galen",
        "message": "So ist der Mensch! Ein Titane in seiner Leidenschaft, wenn sie geweckt ist, ein Lamm in seiner Liebe, wenn sie die wirkliche, echte, wahre Liebe ist!"
    },
    {
        "day": "2-jun",
        "author": "Amélie Godin",
        "message": "Kein Mensch wird so alt, dass er nicht noch durch das Herz leiden könnte."
    },
    {
        "day": "3-jun",
        "author": "Arthur Stahl",
        "message": "Liebe ist Allmacht."
    },
    {
        "day": "4-jun",
        "author": "Wilhelm Müller",
        "message": "Die Lieb ist der Säckel des Fortunat: Je mehr sie gibt, desto mehr sie hat."
    },
    {
        "day": "5-jun",
        "author": "Euripides",
        "message": "Was ist es, sprich, was bei den Menschen »Liebe« heißt? O Kind, das Süßeste und Bitterste zugleich."
    },
    {
        "day": "6-jun",
        "author": "Johann Wolfgang von Goethe",
        "message": "Wer nicht mehr liebt und nicht mehr irrt, der lasse sich begraben."
    },
    {
        "day": "7-jun",
        "author": "Georg Hesekiel",
        "message": "Es ist kaum glaublich, wie schwach viele Menschen werden, wenn die Liebe über sie kommt, und wie stark unzählige andere!"
    },
    {
        "day": "8-jun",
        "author": "Karl Detlef",
        "message": "Die echte Liebe verzeiht auch dann, wenn das Herz selbst tödlich getroffen ist."
    },
    {
        "day": "9-jun",
        "author": "Nikolai Gowrilowitsch Tschernyschewski",
        "message": "Unruhe in der Liebe ist keineswegs das Wesen der Liebe, Unruhe ist etwas, was gar nicht zur Liebe gehört: die Liebe ist fröhlich und sorglos."
    },
    {
        "day": "10-jun",
        "author": "Blaise Pascal",
        "message": "Liebe hat kein Alter."
    },
    {
        "day": "11-jun",
        "author": "Adolf Kolping",
        "message": "Es gibt auf der ganzen Welt kein Band so stark wie das Band des Herzens."
    },
    {
        "day": "12-jun",
        "author": "Leopold Jacoby",
        "message": "Keine Macht, so weit der Himmel reicht die nicht dem Zauber der Liebe weicht."
    },
    {
        "day": "13-jun",
        "author": "Johann Nepomuk Nestroy",
        "message": "Man braucht ja nix als Liebe und alles mögliche andere, und die Erde ist ein Paradies."
    },
    {
        "day": "14-jun",
        "author": "Novalis",
        "message": "Man ist allein in allem, was man liebt."
    },
    {
        "day": "15-jun",
        "author": "Maxim Gorki",
        "message": "Wenn man liebt, wird der Berg zum Tale!"
    },
    {
        "day": "16-jun",
        "author": "Johann Wolfgang von Goethe",
        "message": "Dass soviel Selbstisches in der Liebe ist, und doch was wär sie ohne das!"
    },
    {
        "day": "17-jun",
        "author": "Sir Walter Scott",
        "message": "Am schönsten ist die Rose, wenn ihre Knospe bricht, So tagt aus Furcht empor der Hoffnung schönstes Licht; Am süßesten glüht Rose vom Morgentau gefeuchtet, Am lieblichsten blickt Liebe, wenn sie durch Tränen leuchtet."
    },
    {
        "day": "18-jun",
        "author": "Albert Möser",
        "message": "Die Liebe, sie ist des Lebens Tiefstes und Wahrstes. Jegliches Rätsel der Welt löset sich ein in ihr."
    },
    {
        "day": "19-jun",
        "author": "Johann Heinrich Pestalozzi",
        "message": "Ein jedes Werk, das nicht auf Liebe gegründet ist, trägt den Keim des Todes in sich und geht seinem Ruin entgegen."
    },
    {
        "day": "20-jun",
        "author": "Clemens Brentano",
        "message": "Adam und Eva haben's Lieben erdacht, ich und mein Schätzle haben's auch so gemacht."
    },
    {
        "day": "21-jun",
        "author": "Abbé Ferdinando Galiani",
        "message": "Es gibt Dinge, die nur man sie schön sind, indem begehrt. Die Liebe hat solche Schönheiten."
    },
    {
        "day": "22-jun",
        "author": "Bettina von Arnim",
        "message": "Liebe ist Erkenntnis. und die ist Besitz."
    },
    {
        "day": "23-jun",
        "author": "Jean Paul",
        "message": "O, der Mensch sieht es oft zu spät ein, wie sehr er geliebt wurde, wie vergesslich und undankbar er war und wie groß das verkannte Herz!"
    },
    {
        "day": "24-jun",
        "author": "Johann Wolfgang von Goethe",
        "message": "Entzieht euch dem verstorbenen Zeug, lebendges lasst uns lieben!"
    },
    {
        "day": "25-jun",
        "author": "Leo Tolstoi",
        "message": "Gutes für die Menschen? Was heißt Gutes? Nur eins: Liebe."
    },
    {
        "day": "26-jun",
        "author": "Gottfried Keller",
        "message": "Nach Liebe dürstet alle Welt."
    },
    {
        "day": "27-jun",
        "author": "Christoph Martin Wieland",
        "message": "Liebe, süßes Labsal aller Leiden der Sterblichen, - du wonnevoller Rausch vermählter Seelen! Welche Freuden sind deinen gleich?"
    },
    {
        "day": "28-jun",
        "author": "Philipp Otto Runge",
        "message": "Was wir auch in dieser Zeit erlangen mögen, ist doch die Liebe das höchste Glück."
    },
    {
        "day": "29-jun",
        "author": "Pierre-Marie Quitard",
        "message": "Abwesenheit tötet den Liebenden oder die Liebe."
    },
    {
        "day": "30-jun",
        "author": "Maxim Gorkij",
        "message": "Wenn du zur Geliebten gehst, spürst du nicht, wie die Mücken stechen."
    },
    {
        "day": "1-jul",
        "author": "Friedrich Martin von Bodenstedt",
        "message": "Welchen Wert, sprich, hat dein Leib, wenn ihn des Geliebten Arme nicht umfangen."
    },
    {
        "day": "2-jul",
        "author": "Leo Tolstoi",
        "message": "Die Menschen leben nicht davon, dass sie für sich selbst sorgen; sie leben von der Liebe, die in dem Menschen ist."
    },
    {
        "day": "3-jul",
        "author": "Johann Christian Friedrich Hölderlin",
        "message": "Die Blumen des Herzens wollen freundliche Pflege, Ihre Wurzel ist überall, aber sie selbst gedeihen in heitrer Witterung nur."
    },
    {
        "day": "4-jul",
        "author": "Friedrich von Matthisson",
        "message": "Wo Liebe, Freundschaft, Weisheit und Natur in schöner Eintracht wohnen, ist der Himmel."
    },
    {
        "day": "5-jul",
        "author": "Angelus Silesius",
        "message": "Die Liebe, wenn sie neu, braust wie ein junger Wein: Je mehr sie alt und klar, je Stiller wird sie sein."
    },
    {
        "day": "6-jul",
        "author": "Oscar Wilde",
        "message": "Nimm all mein Liebstes, Lieber, ganz und gar."
    },
    {
        "day": "7-jul",
        "author": "Li Yu",
        "message": "Liebe: Das Land der Weichheit und Wärme."
    },
    {
        "day": "8-jul",
        "author": "Hermann Oeser",
        "message": "Tief sieht die Liebe. Sie sieht alle Schwächen des Geliebten. Darum ist sie Arzt und Schleier."
    },
    {
        "day": "9-jul",
        "author": "Betting von Arnim",
        "message": "Die Liebe trägt alles himmlischen zum Reich."
    },
    {
        "day": "10-jul",
        "author": "Plato",
        "message": "Liebe ist das Verlangen nach Zeugung im Schönen sowohl in Bezug auf die Seele wie auf den Körper."
    },
    {
        "day": "11-jul",
        "author": "Hafis",
        "message": "Nur äußre Schönheit ohne Herz Wie reizvoll auch und rosenmundig Genügt den feinern Sinne nicht Des Manns, der wahrer Liebe kundig."
    },
    {
        "day": "12-jul",
        "author": "Jean Paul",
        "message": "Die Liebe ist, ihr Ende ausgenommen, sich überall gleicher, als man sagt."
    },
    {
        "day": "13-jul",
        "author": "Maria Theresia von Brackel",
        "message": "Jedem ward das Recht, zu glücklich ein lieben; zu lieben ist göttlich Geschenk, das nur die Gnade erteilt."
    },
    {
        "day": "14-jul",
        "author": "Friedrich Lienhard",
        "message": "Worte der Güte sind Schönheit! Taten der Liebe sind Licht!"
    },
    {
        "day": "15-jul",
        "author": "Mark Twain",
        "message": "Die Liebe erscheint das schnellste, ist jedoch das langsamste aller Gewächse. Weder Mann als noch Frau wissen, was Vollkommene Liebe ist, ehe sie nicht ein Vierteljahrhundert verheiratet waren."
    },
    {
        "day": "16-jul",
        "author": "Bryan Waller Procter",
        "message": "Liebe ist klüger als Ehrgeiz."
    },
    {
        "day": "17-jul",
        "author": "Alphonse de Lamartine",
        "message": "Lieben und geliebt zu werden ist menschlich Aber lieben um der Liebe Willen ist engelsgleich."
    },
    {
        "day": "18-jul",
        "author": "Hildegard von Bingen",
        "message": "Die Liebe ist ein nie verlöschendes Feuer."
    },
    {
        "day": "19-jul",
        "author": "Leo Tolstoi",
        "message": "Nur die Liebe vermag alle Knoten zu lösen."
    },
    {
        "day": "20-jul",
        "author": "Miguel de Cervantes",
        "message": "Amor, der schlaue Plagegeist des menschlichen Geschlechts."
    },
    {
        "day": "21-jul",
        "author": "Hazrat Inayat Khon",
        "message": "Liebe ist die gangbarste Münze aller Völker und aller Zeiten."
    },
    {
        "day": "22-jul",
        "author": "Augustinus",
        "message": "Der Preis der Liebe bist du selbst."
    },
    {
        "day": "23-jul",
        "author": "William Shakespeare",
        "message": "Wo Liebe rechnet, ist sie bettelarm."
    },
    {
        "day": "24-jul",
        "author": "Christine von Schweden",
        "message": "Die wahre Liebe will nichts als als lieben."
    },
    {
        "day": "25-jul",
        "author": "Sir Walter Scott",
        "message": "Die Liebe regiert den Hof, das Lager, das Wäldchen, und die Menschen unten sowie die Heiligen oben, denn die Liebe ist der Himmel, und der Himmel ist die Liebe."
    },
    {
        "day": "26-jul",
        "author": "Sarah Bernhardt",
        "message": "Leben bringt Leben hervor. Energie schafft Energie. Indem man sich verschenkt, wird man reich."
    },
    {
        "day": "27-jul",
        "author": "Johann Wolfgang von Goethe",
        "message": "Das ist die wahre Liebe, die immer und immer sich gleich bleibt; wenn man ihr alles gewährt, wenn man ihr alles versagt. "
    },
    {
        "day": "28-jul",
        "author": "William Shakespeare",
        "message": "Redet leise, wenn Ihr von Liebe redet."
    },
    {
        "day": "29-jul",
        "author": "japanisches Sprichwort",
        "message": "Liebe und Überlegung sind zwei ganz verschiedene Dinge."
    },
    {
        "day": "30-jul",
        "author": "Wilhelm Busch",
        "message": "Liebe ist der Inbegriff - auf das andere pfeife ich."
    },
    {
        "day": "31-jul",
        "author": "Deutsches Sprichwort",
        "message": "Wo Liebe fehlt, erblickt man alle Fehler."
    },
    {
        "day": "1-aug",
        "author": "William Shakespeare",
        "message": "Kein steinern Bollwinkel kann der Liebe wehren, und Liebe wagt, was Liebe kann."
    },
    {
        "day": "2-aug",
        "author": "Johann Wolfgang von Goethe",
        "message": "Wir werden geformt und gestaltet durch das, was wir lieben."
    },
    {
        "day": "3-aug",
        "author": "Japanisches Sprichwort",
        "message": "Wer auf Liebespfaden wandelt, für den sind zwei Meilen nicht länger als eine."
    },
    {
        "day": "4-aug",
        "author": "Platon",
        "message": "Die Liebe ist ein Zeugen im Schönen, sei es im Leibe oder in der Seele."
    },
    {
        "day": "5-aug",
        "author": "Ungarisches Sprichwort",
        "message": "Im Traum und in der Liebe ist nichts unmöglich."
    },
    {
        "day": "6-aug",
        "author": "Victor Hugo",
        "message": "Es gibt nichts Schöneres, als geliebt zu werden, geliebt um seiner selbst willen oder vielmehr; trotz seiner selbst."
    },
    {
        "day": "7-aug",
        "author": "Johann Heinrich Pestalozzi",
        "message": "Die Liebe hat eine göttliche Kraft, wenn sie wahrhaft ist und das Kreuz nicht scheut."
    },
    {
        "day": "8-aug",
        "author": "Ralph Waldo Emerson",
        "message": "Alle Welt liebt einen Liebenden."
    },
    {
        "day": "9-aug",
        "author": "Jean Paul",
        "message": "Mit einer Kindheit voll Liebe kann man ein halbes Leben hindurch für die kalte Welt haushalten."
    },
    {
        "day": "10-aug",
        "author": "Laotse",
        "message": "Güte in den Worten erzeugt Vertrauen, Güte beim Denken erzeugt Tiefe, Güte beim Verschenken erzeugt Liebe."
    },
    {
        "day": "11-aug",
        "author": "Hugo von Hofmannsthal",
        "message": "Eine Flaumfeder kann einen Kieselstein rundschleifen, sofern sie von der Hand der Liebe geführt wird."
    },
    {
        "day": "12-aug",
        "author": "Jack London",
        "message": "Wenn es dir möglich ist, die Liebe in der Welt mit auch nur einem kleinen Funken zu zu bereichern, dann hast du nicht umsonst gelebt."
    },
    {
        "day": "13-aug",
        "author": "Johann Wolfgang von Goethe",
        "message": "Man muss nur ein Wesen recht von Grund auf lieben, dann kommen einem alle anderen liebenswürdig vor."
    },
    {
        "day": "14-aug",
        "author": "Johann Gottlieb Fichte",
        "message": "Keine wahre und dauernde Liebe kann ohne Achtung bestehen; jede andere zieht Reue nach sich und ist einer edlen Sache unwürdig."
    },
    {
        "day": "15-aug",
        "author": "William Shakespeare",
        "message": "Liebe wechselt nicht mit Stunde oder Woche, weit reicht ihre Kraft bis zum letzten Tag."
    },
    {
        "day": "16-aug",
        "author": "Max Dauthendey",
        "message": "Wer eine unglückliche Liebe in Alkohol ertränken will, handelt töricht. Denn Alkohol konserviert."
    },
    {
        "day": "17-aug",
        "author": "Richard Wagner",
        "message": "Verständnis kommt uns durch die Liebe."
    },
    {
        "day": "18-aug",
        "author": "Marie Freifrau von Ebner-Eschenbach",
        "message": "Echte Liebesgeschichten gehen nie zu Ende."
    },
    {
        "day": "19-aug",
        "author": "William Shakespeare",
        "message": "Man könnte ebenso gut Feuer im Schnee entzünden wie den Versuch machen, das Feuer der Liebe mit Worten zu löschen."
    },
    {
        "day": "20-aug",
        "author": "Johann Wolfgang von Goethe",
        "message": "Man kann niemand lieben, als den, dessen Gegenwart man sicher ist, wenn man seiner bedarf."
    },
    {
        "day": "21-aug",
        "author": "Chinesisches Sprichwort",
        "message": "Liebe ist die Kraft, die allen Wesen Leben schafft."
    },
    {
        "day": "22-aug",
        "author": "Deutsches Sprichwort",
        "message": "Liebe kommt der Bitte zuvor."
    },
    {
        "day": "23-aug",
        "author": "Euripides",
        "message": "Wer der Liebe ganz entsagt, ist nicht weniger krank als der, der ihrer allzusehr begehrt."
    },
    {
        "day": "24-aug",
        "author": "Die Bibel",
        "message": "Wo mein Schatz ist, da wird auch mein Herz sein."
    },
    {
        "day": "25-aug",
        "author": "Emanuel Swedenborg",
        "message": "Das Wesen aller Liebe besteht in der Verbindung. Die Liebe besteht darin, dass das Eigene Teil des anderen werde und dass man dessen Lust als Lust in sich empfindet."
    },
    {
        "day": "26-aug",
        "author": "Nigerianisches Sprichwort",
        "message": "Man liebt einen anderen nicht, wenn man nichts von ihm annimmt."
    },
    {
        "day": "27-aug",
        "author": "Thérèse von Lisieux",
        "message": "Ich habe es nie bereut, mich für die Liebe entschieden zu haben."
    },
    {
        "day": "28-aug",
        "author": "Max Scheler",
        "message": "Nur der Liebende ist es, der an den Übeln und Schwächen des Geliebten wahrhaft leidet."
    },
    {
        "day": "29-aug",
        "author": "Friedrich Daniel Ernst Schleiermacher",
        "message": "Du sollst nicht geliebt sein wollen, wo du nicht liebst."
    },
    {
        "day": "30-aug",
        "author": "Voltaire",
        "message": "Die Liebe ist ein Stoff, den die Natur gewebt und die Phantasie bestickt hat."
    },
    {
        "day": "31-aug",
        "author": "Chinesisches Sprichwort",
        "message": "Wer hasst, ist taub. Wer neidet, ist blind. Wer zürnt, der lahmt. Nur wer liebt, hat keine Gebrechen."
    },
    {
        "day": "1-sept",
        "author": "Madame de Staël",
        "message": "Liebe ist Selbstanbetung zu zweit."
    },
    {
        "day": "2-sept",
        "author": "Oscar Wilde",
        "message": "Wenn man liebt, täuscht man immer zuerst sich und später andere."
    },
    {
        "day": "3-sept",
        "author": "Augustinus",
        "message": "Die Liebe allein versteht das Geheimnis, andere zu beschenken und dabei selbst reich zu werden."
    },
    {
        "day": "4-sept",
        "author": "Henry Austin Dobson",
        "message": "Die Liebe kommt unbemerkt, nur wenn sie geht merken wir es."
    },
    {
        "day": "5-sept",
        "author": "Benjamin Disraeli",
        "message": "Der Zauber der ersten Liebe ist: Wir wissen noch nicht, dass sie enden kann."
    },
    {
        "day": "6-sept",
        "author": "Miguel de Cervantes",
        "message": "Alles, worauf Liebe wartet, ist Gelegenheit."
    },
    {
        "day": "7-sept",
        "author": "Die Bibel",
        "message": "Liebe deckt alle Schuld zu."
    },
    {
        "day": "8-sept",
        "author": "Robert Louis Stevenson",
        "message": "Solange wir lieben, dienen wir, solange wir von anderen geliebt werden, sind wir, ich möchte fast sagen, unentbehrlich."
    },
    {
        "day": "9-sept",
        "author": "Jeremias Gotthe",
        "message": "Es ist mit der Liebe wie mit den Pflanzen: Wer Liebe ernten will muss Liebe säen."
    },
    {
        "day": "10-sept",
        "author": "Anatole France",
        "message": "Die Liebe ist eine ansteckende Krankheit. Keiner weiß, wann es ihn erwischen kann!"
    },
    {
        "day": "11-sept",
        "author": "Thomas von Kempen",
        "message": "Liebe ist eine wunderbare Sache, das höchste Gut das jede Last leicht erscheinen lässt. Liebe ist wachsam, und selbst im Schlaf wacht sie noch. Auch wenn sie ermüdet, erschöpft sie sich nicht und wenn man sie bedrängt, lässt sie sich nicht bezwingen."
    },
    {
        "day": "12-sept",
        "author": "Johann Gottlieb Fichte",
        "message": "Das Leben ist selber die Seligkeit ... denn das Leben ist Liebe, und die ganze Form und Kraft des Lebens besteht in der Liebe und entsteht aus der Liebe."
    },
    {
        "day": "13-sept",
        "author": "Theodor Storm",
        "message": "Das ist das Größte, was dem Menschen gegeben ist. dass es in seiner Macht steht, grenzenlos zu lieben."
    },
    {
        "day": "14-sept",
        "author": "Die Bibel",
        "message": "Das Wissen bläst auf, aber die Liebe baut auf."
    },
    {
        "day": "15-sept",
        "author": "Jean de La Bruyère",
        "message": "Anfang und Ende einer Liebe kündigen sich dadurch an, dass man sich scheut, mit dem anderen alleine zu sein."
    },
    {
        "day": "16-sept",
        "author": "Guy de Maupassant",
        "message": "Gegen Amor gibt's nur ein Heilmittel: Liebe! Es schmeckt süß, wirkt rasch und ist von dauernder Wirkung."
    },
    {
        "day": "17-sept",
        "author": "Leo Tolstoi",
        "message": "Das beste Mittel, glücklich zu werden, ist, wie eine Spinne aus sich heraus nach allen Seiten ein Netz aus Liebe zu spinnen und mit dessen klebrigen Fäden alles einzufangen, was des Weges kommt."
    },
    {
        "day": "18-sept",
        "author": "Martin Luther",
        "message": "Die Liebe allein ist eine Tugend und schafft alle anderen Tugenden."
    },
    {
        "day": "19-sept",
        "author": "Betting von Arnim",
        "message": "Du liebst in dem Geliebten nur den eigenen Genius."
    },
    {
        "day": "20-sept",
        "author": "Ungarisches Sprichwort",
        "message": "Lass dich durch nichts im Leben traurig machen, solange du liebst."
    },
    {
        "day": "21-sept",
        "author": "Jean-Jacques Rousseau",
        "message": "Um einen guten Liebesbrief zu schreiben, musst du anfangen, ohne zu wissen, was du sagen willst, und endigen, ohne zu wissen, was du gesagt hast."
    },
    {
        "day": "22-sept",
        "author": "Franz von Sales",
        "message": "Das Maß der Liebe ist die Liebe ohne Maß."
    },
    {
        "day": "23-sept",
        "author": "Jean de La Bruyère",
        "message": "Man mag in der Liebe heikel sein, man verzeiht ihr doch mehr Fehler als der Freundschaft."
    },
    {
        "day": "24-sept",
        "author": "Pierre Carlet de Marivaux",
        "message": "Die Liebe lässt uns an Dinge glauben. denen wir sonst mit höchstem Misstrauen begegnen würden."
    },
    {
        "day": "25-sept",
        "author": "Theodor Storm",
        "message": "Ich seh dein liebes Angesicht, ich seh die Schatten der Zukunft nicht."
    },
    {
        "day": "26-sept",
        "author": "Aus dem Dhammapada",
        "message": "Nur die, welche nichts lieben und nichts hassen, tragen keine Fesseln."
    },
    {
        "day": "27-sept",
        "author": "Henri Stendhal",
        "message": "Die Liebe ist eine köstliche Blume, aber man muss den Mut haben, bis an den Rand eines schauerlichen Abgrunds zu gehen, um sie zu pflücken."
    },
    {
        "day": "28-sept",
        "author": "Johann Gottfried von Herder",
        "message": "Denn dem Glück geliebt zu werden, gleicht kein ander Glück auf Erden."
    },
    {
        "day": "29-sept",
        "author": "Oliver Wendell Holmes",
        "message": "Was wir am meisten lieben und verehren, wird durch frühe Assoziationen bestimmt."
    },
    {
        "day": "30-sept",
        "author": "Thomas von Kempen",
        "message": "Viel bewirkt, wer viel liebt."
    },
    {
        "day": "1-oct",
        "author": "Meister Eckhart",
        "message": "Immer ist die wichtigste Stunde die gegenwärtige immer ist der wichtigste Mensch, der dir gerade gegenübersteht, immer ist die wichtigste Tat die Liebe."
    },
    {
        "day": "2-oct",
        "author": "Friedrich Rückert",
        "message": "Das höchste Liebeswerk das Menschen ist verliehn zu tun: Andere zur höchsten Liebe ziehn."
    },
    {
        "day": "3-oct",
        "author": "Sophokles",
        "message": "Nicht mitzuhassen, mitzulieben bin ich da."
    },
    {
        "day": "4-oct",
        "author": "Washington Irving",
        "message": "Liebe ist nie verloren. Wird sie nicht erwidert, so fließt sie zurück und tröstet und reinigt das Herz."
    },
    {
        "day": "5-oct",
        "author": "Walisisches Sprichwort",
        "message": "Wo Liebe ist, ist Versöhnung leicht."
    },
    {
        "day": "6-oct",
        "author": "Rainer Maria Rilke",
        "message": "Je mehr Liebe man gibt, desto mehr besitzt man davon."
    },
    {
        "day": "7-oct",
        "author": "Henry Wadsworth Longfellow",
        "message": "Sprich nicht von verschwendeter Liebe. Liebe ist nie je verschwendet worden."
    },
    {
        "day": "8-oct",
        "author": "Molière",
        "message": "Die Liebe wird nicht von der Vernunft regiert."
    },
    {
        "day": "9-oct",
        "author": "Phaedrus",
        "message": "Gesetzen widersteht man; Liebe zwingt."
    },
    {
        "day": "10-oct",
        "author": "Leopold Jacoby",
        "message": "Auf zwei Rädern die Welt rollt. Das eine ist Liebe das andere Gold."
    },
    {
        "day": "11-oct",
        "author": "Blaise Pascal",
        "message": "Die Freude, welche die Liebe, die man nicht auszusprechen wagt, gewährt, hat ihr Schmerzliches, aber auch ihr Süßes."
    },
    {
        "day": "12-oct",
        "author": "Friedrich Wilhelm Nietzsche",
        "message": "Die Forderung, geliebt zu werden, ist die größte aller Anmaßungen."
    },
    {
        "day": "13-oct",
        "author": "Adelbert von Chamisso",
        "message": "Liebe ist kein Solo. Liebe ist ein Duett. Schwindet sie beim einen, verstummt das Lied."
    },
    {
        "day": "14-oct",
        "author": "Pubilius Syrus",
        "message": "Lieben und vernünftig sein ist kaum einem Gotte möglich."
    },
    {
        "day": "15-oct",
        "author": "Augustinus Aurelius",
        "message": "In notwendigen Dingen: Einheit. In fraglichen Dingen: Freiheit. In allen Dingen: Liebe."
    },
    {
        "day": "16-oct",
        "author": "Friedrich von Schiller",
        "message": "Liebe verschenkt. Egoismus leiht."
    },
    {
        "day": "17-oct",
        "author": "Søren Kierkegaard",
        "message": "Was ist die Jugend? Ein Traum. Was ist die Liebe? Der Inhalt eines Traumes."
    },
    {
        "day": "18-oct",
        "author": "Gottfried Keller",
        "message": "Es liegt etwas so unerklärlich Heiliges und Seliges in der Liebe, sie macht so nobel und lauter, dass in demjenigen, der fruchtlos und unglücklich liebt, etwas Unwahres und Ungerechtes sein muss."
    },
    {
        "day": "19-oct",
        "author": "Gotthold Ephraim Lessing",
        "message": "Wer aus Liebe närrisch wird, der wäre es früher oder später auch ohne Liebe geworden."
    },
    {
        "day": "20-oct",
        "author": "François de la Rochefoucauld",
        "message": "Die Liebe kann, wie das Feuer, nicht ohne beständiges Anfachen leben, und sie stirbt, sobald sie zu hoffen oder zu fürchten aufhört."
    },
    {
        "day": "21-oct",
        "author": "Ali Ibn Al Andaluzi Hazm",
        "message": "Die Liebe ist eine unheilbare Krankheit. Aber wer von ihr befallen ist, verlangt nicht nach Genesung, und wer daran leidet, will nicht gesunden."
    },
    {
        "day": "22-oct",
        "author": "Ugo Foscolo",
        "message": "Die Seligkeit, sich geliebt zu fühlen, mildert jeden Schmerz."
    },
    {
        "day": "23-oct",
        "author": "Katharina von Siena",
        "message": "Die Liebe trägt die Seele, wie die Füße unseren Körper tragen."
    },
    {
        "day": "24-oct",
        "author": "Sappho von Lesbos",
        "message": "Reiterscharen, Soldaten oder auch Schiffe halten die Menschen fürs Schönste auf dunkler Erde; ich meine aber das Schönste sei, was die Liebe sehnend begehrt."
    },
    {
        "day": "25-oct",
        "author": "Joseph Victor von Scheffel",
        "message": "Liebe ist von allen Lehrern der geschwindeste auf Erden. Was oft Jahre des Fleißes nicht erreichen, das gewinnt sie mit dem Zauber einer Bitte, mit der Mahnung eines Blickes."
    },
    {
        "day": "26-oct",
        "author": "Hugo von Hofmannsthal",
        "message": "Das geliebte Wesen ist immer der Docht in der Liebesflamme."
    },
    {
        "day": "27-oct",
        "author": "Heinrich Pestalozzi",
        "message": "Liebe ist das Band, das den Erdkreis verbindet."
    },
    {
        "day": "28-oct",
        "author": "Georges Courteline",
        "message": "Gewiss ist es bitter, nicht geliebt zu werden, während man selbst liebt; doch unvergleichlich bitterer ist es, geliebt zu werden, während man selbst nicht mehr liebt."
    },
    {
        "day": "29-oct",
        "author": "Louisa May Alcott",
        "message": "Die Liebe ist ein sehr wirksames Schönheitsmittel."
    },
    {
        "day": "30-oct",
        "author": "Iwan Sergejewitsch Turgenjew",
        "message": "Die Liebe ist stärker als der Tod und die Schrecken des Todes. Allein die Liebe erhält und bewegt unser Leben."
    },
    {
        "day": "31-oct",
        "author": "Immanuel Kant",
        "message": "Der Tod - das weiß man - nutzt sich durch Wiederholung ebenso wenig ab wie das Leben, und die Liebe auch nicht."
    },
    {
        "day": "1-nov",
        "author": "Marie Freifrau von Ebner-Eschenbach",
        "message": "Nichts macht uns feiger und gewissenloser als der Wunsch, von allen Menschen geliebt zu werden."
    },
    {
        "day": "2-nov",
        "author": "Honoré de Balzac",
        "message": "In der Liebe gibt es einen Moment wo sie sich selbst genügt, wo sie glücklich ist zu existieren."
    },
    {
        "day": "3-nov",
        "author": "Georg Rudolf Weckherlin",
        "message": "Die Liebe ist also das erste Gesetz der menschlichen Vollkommenheit."
    },
    {
        "day": "4-nov",
        "author": "Alfred de Musset",
        "message": "Wenn die Liebe der Gewöhnung widersteht, hat sie nichts mehr zu befürchten."
    },
    {
        "day": "5-nov",
        "author": "Leo Tolstoi",
        "message": "Du brauchst nur zu lieben und alles ist Freude."
    },
    {
        "day": "6-nov",
        "author": "Adelbert von Chamisso",
        "message": "Die Lieb umfasst des Weibes volles Leben. Sie ist ihr Kerker und Himmelreich; Die sich in Demut liebend hingegeben, Sie dient und herrscht zugleich."
    },
    {
        "day": "7-nov",
        "author": "William Shakespeare",
        "message": "Der Liebe leichte Schwingen trugen mich; kein steinern Bollwerk kann der Liebe wehren; und Liebe wagt, was irgend Liebe kann."
    },
    {
        "day": "8-nov",
        "author": "Ovid",
        "message": "Die Hoffnung ist es, die die Liebe nährt."
    },
    {
        "day": "9-nov",
        "author": "Wan Sergejewitsch Turgenjew",
        "message": "Wehe dem Herzen, das in seiner Jugend nicht geliebt hat."
    },
    {
        "day": "10-nov",
        "author": "Blaise Pascal",
        "message": "Ehrfurcht und Liebe müssen so gut verteilt sein, dass sie einander tragen, ohne dass die Liebe von der Ehrfurcht erdrückt wird."
    },
    {
        "day": "11-nov",
        "author": "William Shakespeare",
        "message": "Wenn Liebe Wasser wärmt, kühlt Wasser Liebe nicht."
    },
    {
        "day": "12-nov",
        "author": "Alfred Lord Tennyson",
        "message": "Es ist besser, Liebe empfunden und Verlust erlitten zu haben, als niemals geliebt zu haben."
    },
    {
        "day": "13-nov",
        "author": "Jean-Jacques Rousseau",
        "message": "In der Schule der Welt wie in der Schule der Liebe muss man alsbald mit der Ausübung dessen, was man zu lernen gedenkt, den Anfang machen."
    },
    {
        "day": "14-nov",
        "author": "Jeremias Gotthelf",
        "message": "Wo Liebe ist, da steht man alles aus und hat noch Freud' dabei."
    },
    {
        "day": "15-nov",
        "author": "Ovid",
        "message": "Um geliebt zu werden, sei liebenswürdig!"
    },
    {
        "day": "16-nov",
        "author": "Arabisches Sprichwort",
        "message": "Liebe ist eine Frucht mit süßem Saft und bitterem Fleisch."
    },
    {
        "day": "17-nov",
        "author": "Christian Fürchtegott Gellert",
        "message": "Viel besser ohne Glück als ohne Liebe."
    },
    {
        "day": "18-nov",
        "author": "Jean Paul",
        "message": "Der Zank in der Ehe ist die Schneedecke, unter der sich die Liebe warm hält."
    },
    {
        "day": "19-nov",
        "author": "Friedrich Daniel Ernst Schleiermacher",
        "message": "Las dir keine Grenzen setzen in deiner Liebe, nicht Maß, nicht Art, nicht Dauer! Ist sie doch dein Eigentum: Wer kann sie fordern?"
    },
    {
        "day": "20-nov",
        "author": "Robert Louis Stevenson",
        "message": "Liebe ist das große Amulett, das diese Welt in einen Garten verwandelt."
    },
    {
        "day": "21-nov",
        "author": "Martin Luther",
        "message": "Der Glaube bring bringt den Menschen zu Gott, die Liebe bringt ihn zu den Menschen."
    },
    {
        "day": "22-nov",
        "author": "Novalis",
        "message": "Die Liebe ist der Endzweck der Weltgeschichte und das Amen des Universums."
    },
    {
        "day": "23-nov",
        "author": "Marie Freifrau von Ebner-Eschenbach",
        "message": "An Rheumatismen und an wahre Liebe glaubt man erst, wen man davon befallen wird."
    },
    {
        "day": "24-nov",
        "author": "Emanuel Geibel",
        "message": "Wer einmal Liebe nahm und Liebe gab auf Erden, kann selbst im tiefsten Gram nie ganz unselig werden."
    },
    {
        "day": "25-nov",
        "author": "Epiktet",
        "message": "Niemand wähnt sich beliebt, der nicht selbst liebt."
    },
    {
        "day": "26-nov",
        "author": "Blaise Pascal",
        "message": "Das Herz hat seine Gründe, die die Vernunft nicht kennt."
    },
    {
        "day": "27-nov",
        "author": "Ovid",
        "message": "Wie viel Muscheln am Strand, soviel Schmerzen bietet die Liebe."
    },
    {
        "day": "28-nov",
        "author": "Euripides",
        "message": "Der beste Lehrmeister zur Weisheit und Tugend ist die Liebe; im Verkehr der Menschen ist sie von allen die freundlichste Gottheit. Denn sie verteilt kummerlosen Genuss und nimmt uns nicht die Hoffnung."
    },
    {
        "day": "29-nov",
        "author": "Johann Wolfgang von Goethe",
        "message": "Die Erde wird durch Liebe frei, durch Taten wird sie groß."
    },
    {
        "day": "30-nov",
        "author": "Ludwig Christoph Heinrich Hölty",
        "message": "Die Liebe macht zum Goldpalast die Hütte."
    },
    {
        "day": "1-dec",
        "author": "August Strindberg",
        "message": "Sollte es wirklich einmal zu Kampf einem zwischen den Geschlechtern kommen, dann wer den die Frauen siegen, weil die Männer die Frauen mehr lieben als die Frauen die Männer."
    },
    {
        "day": "2-dec",
        "author": "Friedrich Gottlieb Klopstock",
        "message": "Die Freundschaft und die Liebe sind zwei Pflanzen an einer Wurzel, die letztere hat nur einige Blüten mehr."
    },
    {
        "day": "3-dec",
        "author": "Blaise Pascal",
        "message": "Ein Tropfen Liebe ist mehr als ein Ozean Verstand."
    },
    {
        "day": "4-dec",
        "author": "Georg Herbert",
        "message": "Liebe regiert ihr Königreich ohne ein Schwert."
    },
    {
        "day": "5-dec",
        "author": "Francis Bacon",
        "message": "Die Liebe hält ihr Fest, wo zwei nur sind."
    },
    {
        "day": "6-dec",
        "author": "Chinesisches Sprichwort",
        "message": "Liebenden schmeckt sogar das Wasser süß."
    },
    {
        "day": "7-dec",
        "author": "Wilhelm Raabe",
        "message": "Was ihr euch Liebes noch in der Welt sagen und tun könnt, das sagt und tut rasch, morgen ist es vielleicht schon zu spät dazu."
    },
    {
        "day": "8-dec",
        "author": "Russische Weisheit",
        "message": "Wahre Liebe gleicht dem Ring, und der Ring, der hat kein Ende."
    },
    {
        "day": "9-dec",
        "author": "Blaise Pascal",
        "message": "Es gibt keine Wahrheit außerhalb der Liebe."
    },
    {
        "day": "10-dec",
        "author": "Vergil",
        "message": "Amor besiegt die Welt, und auch wir weichen der Liebe."
    },
    {
        "day": "11-dec",
        "author": "Sextius Propertius",
        "message": "Liebe verreist wohl mal, aber sie wandert nicht aus."
    },
    {
        "day": "12-dec",
        "author": "Hieronymus",
        "message": "Verletzte Liebe hat ein Recht, zu zürnen."
    },
    {
        "day": "13-dec",
        "author": "Lope de Vega",
        "message": "Ist Liebe Zwang, so schafft der Zwang doch keine rechte Liebe."
    },
    {
        "day": "14-dec",
        "author": "Molière",
        "message": "Zu leben, ohne zu lieben, ist kein richtiges Leben. Nimm dem Leben die Liebe, und du nimmst ihm sein Vergnügen."
    },
    {
        "day": "15-dec",
        "author": "Blaise Pascal",
        "message": "Nichts ist der Liebe so ähnlich wie die Begierde, und nichts ist ihr so entgegengesetzt."
    },
    {
        "day": "16-dec",
        "author": "Gotthold Ephraim Lessing",
        "message": "Es ist kein Verbrechen, geliebt zu haben; noch viel weniger ist es eines, geliebt worden zu sein."
    },
    {
        "day": "17-dec",
        "author": "Franz von Baader",
        "message": "Die Liebe allein hat Respekt für Freiheit, weil sie nur in dieser lebt, und wo die Liebe weicht, tritt die Despotie ein."
    },
    {
        "day": "18-dec",
        "author": "Emanuel Geibel",
        "message": "»Furchtlos und treu« ist der Wahlspruch der Liebe."
    },
    {
        "day": "19-dec",
        "author": "Leonardo da Vinci",
        "message": "Je größer der Mann, desto tiefer seine Liebe."
    },
    {
        "day": "20-dec",
        "author": "Vincent van Gogh",
        "message": "Je mehr man liebt, umso tätiger wird man sein, glaub ich; denn Liebe, die nichts weiter ist als Gefühl, würde ich nicht einmal Liebe nennen mögen."
    },
    {
        "day": "21-dec",
        "author": "Antoine de Rivarol",
        "message": "Die Liebe ist ein Raub der Natur an der Gesellschaft."
    },
    {
        "day": "22-dec",
        "author": "Friedrich Daniel Ernst Schleiermacher",
        "message": "Liebe ist die Synthesis zwischen Phantasie und Vernunft."
    },
    {
        "day": "23-dec",
        "author": "Rahel Varnhagen",
        "message": "Immer dasselbe und immer etwas anderes lieben heißt beständig lieben. Nichts lieben können ist unbeständig sein."
    },
    {
        "day": "24-dec",
        "author": "Adalbert Stifter",
        "message": "Nur der ist reich, der geliebt wird und lieben darf."
    },
    {
        "day": "25-dec",
        "author": "Benjamin Disraeli",
        "message": "Wir sind alle zum Lieben geboren. Es ist der Sinn unseres Seins und sein einziger Zweck."
    },
    {
        "day": "26-dec",
        "author": "Publius Terentius Afer",
        "message": "Der Liebenden Streit die Liebe erneuert."
    },
    {
        "day": "27-dec",
        "author": "Maxim Gorki",
        "message": "Aber wo die Liebe herrscht, haben wir, die wir eben noch wilde Tiere waren, jetzt Kultur - Kunst und alles Große, dessen wir uns mit Recht rühmen."
    },
    {
        "day": "28-dec",
        "author": "Betting von Arnim",
        "message": "Und das ist ja der Liebe einziger Bedarf, aufgenommen zu sein; und was nicht ihrer Empfängnis fähig ist, das ist auch nicht der Liebe Gegenstand."
    },
    {
        "day": "29-dec",
        "author": "Gottfried Keller",
        "message": "Man ist immer froh, kleine Mängel an geliebten Personen zu finden, um sie nur ohne Verzug verzeihen und sogar mitleben zu können."
    },
    {
        "day": "30-dec",
        "author": "Gotthold Ephraim Lessing",
        "message": "So geht es den Empfindsamen! Die Liebe spielt ihnen immer die schlimmsten Streiche."
    },
    {
        "day": "31-dec",
        "author": "Heinrich Heine",
        "message": "Du fragst mich, Kind, was Liebe ist? Ein Stern in einem Haufen Mist."
    }
]
}
