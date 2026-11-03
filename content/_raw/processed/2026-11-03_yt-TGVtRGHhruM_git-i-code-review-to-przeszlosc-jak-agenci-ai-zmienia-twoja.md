---
video_id: TGVtRGHhruM
source_url: https://www.youtube.com/watch?v=TGVtRGHhruM
title: "GIT i Code Review to przeszłość? Jak Agenci AI zmienią twoją pracę"
channel: "Przeprogramowani"
uploader_id: "@Przeprogramowani"
duration: 700
duration_human: "11:40"
published: 2026-10-26
language: pl
transcription: captions
chapters:
  []
tags: ["it", "programowanie", "przeprogramowani", "informatyka", "inżynieria oprogramowania", "Ai"]
categories: ["Science & Technology"]
fetched: 2026-11-03T06:42:20Z
---

# GIT i Code Review to przeszłość? Jak Agenci AI zmienią twoją pracę

[0:00] Wydaje ci się, że we wdrożeniu AI chodzi
[0:01] o modele, harnessy i agentów. Grubo się
[0:04] mylz. Na ostatnim Live Txds pojawiło się
[0:07] następujące pytanie. Często w zespołach
[0:09] mamy kilku deweloperów od tej samej
[0:10] działki, na przykład front-endowców.
[0:12] Zakładając, że lista tasków to do jest
[0:14] długa, nie zawsze tworzący taski ma
[0:16] ogląd na inne taski. Dlatego też zdarza
[0:19] się, że kilka tasków dotyczy zmian w
[0:20] granicach jednego komponentu, co
[0:22] spowoduje konflikty przy mergeu. Jeśli
[0:24] pracuję w projekcie sam, to jestem w
[0:26] stanie zapanować nad taskami tak, aby
[0:28] agenci w swoich zadaniach nie wchodzili
[0:29] sobie w kod. Czy wasz Tenex workflow
[0:31] daje możliwość kontroli używając
[0:33] agentów, kto nad czym pracuje i czy inne
[0:35] taski nie zahaczają o ten sam obszar?
[0:38] Okej, na pierwszym rzut oka sytuacja
[0:40] jest jasna. Zarządzanie backlogiem,
[0:42] konflikty przy mergeu, no to pewnie
[0:43] potrzebujemy lepszego workflow w giicie,
[0:45] jakieś skill dla AI pluginów do ID. albo
[0:47] zmiany jiry na dinar, ale czy na pewno
[0:50] to jest klu? Co jeśli powiem wam, że
[0:53] autor tego pytania prawdopodobnie
[0:55] zupełnie nieświadomie ukrył w nim gotowe
[0:57] rozwiązanie? I co jeśli zamiast łatać
[0:59] ten problem kolejnym narzędziem
[1:01] pozbylibyśmy się jego prawdziwego
[1:03] źródła? Nie, nie mówię o pozbywaniu się
[1:04] deweloperów. Spokojnie. Dzisiaj pokażę
[1:06] wam trzy rzeczy. Po pierwsze, dlaczego
[1:08] prawdziwym winowajcą waszych konfliktów
[1:10] w kodzie są dwie pizze? Dlaczego w
[1:12] firmach pracujących na froncie AI pod
[1:14] naporem agentów pęka dzisiaj nawet
[1:16] klasyczny git? I po trzecie, dlaczego
[1:18] zespół, który mergeuje dzisiaj 10 razy
[1:19] więcej kodu, zdecydował się odpuścić
[1:22] ludzkie cold review? Ale zanim tam
[1:23] przejdziemy, nie zapomnijcie zostawić
[1:25] kciuka w górę i subskrybować tego
[1:27] kanału. Lecimy.
[1:33] Zacznijmy odważnej tezy. Git i długi
[1:36] backlock wcale nie są źródłem problemu
[1:37] naszego studenta. Źródłem problemu jest
[1:40] pizza, a właściwie dwie pizze. Przez
[1:42] lata w branży IT standardem był
[1:44] spopularyzowany przez Jeffa Bezusa w
[1:45] Amazonie model Two Pizza Teams, który
[1:47] adresował tak naprawdę jeden problem.
[1:49] Kiedy firma rośnie, pojawiają się zatory
[1:51] komunikacyjne. Im więcej osób i punktów
[1:53] przecięcia w codziennej pracy, tym
[1:55] więcej czekania, zależności i rozmytej
[1:57] odpowiedzialności. Bezos w swoim
[1:59] koncepcie chciał zbudować niezależne,
[2:01] ale jednocześnie wystarczająco sprawcze
[2:03] grupy, które pchają tematy do przodu.
[2:05] Ile osób mielibyśmy w środku takiego
[2:06] zespołu zamiast definiowania sztywnego
[2:09] rozmiaru przyjęło się mówić, że powinno
[2:10] dać się go wykarmić dwiema dużymi
[2:12] pizzami, czyli w praktyce mielibyśmy tam
[2:13] od sześciu do 10 osób o różnych
[2:15] specjalizacjach. Zakładam, że wielu z
[2:17] was w takich teach pracuje do dziś, ale
[2:19] dziś staje się tak naprawdę wczoraj,
[2:22] kiedy do zespołu dołączają agenci, ten
[2:24] bilans całkowicie się wywraca. Wróćmy na
[2:27] sekundę do pytania z naszego live'a.
[2:28] Pamiętacie jak mówiłem, że autor sam
[2:30] ukrył w nim odpowiedź? Spójrzcie na
[2:32] drugie zdanie. Jeśli pracuję w projekcie
[2:34] sam, to jestem w stanie zapanować nad
[2:35] taskami tak, aby agenci w swoich
[2:37] zmianach nie wchodzili sobie w kod. No i
[2:39] dokładnie tak jest. Problem z
[2:41] konfliktami nie wynika z tego, że
[2:43] brakuje nam jakiegoś magicznego skilla
[2:44] do Gita czy pluginu do Cloud Coda.
[2:46] Wynika z tego, że dzisiaj na masową
[2:49] skalę próbujemy wcisnąć narzędzie dające
[2:51] kilkukrotną dźwignię w starą strukturę
[2:53] zespołu projektowaną pod ręczne pisanie
[2:55] kodu. A dzisiaj świat wygląda zupełnie
[2:58] inaczej. Kiedyś jeden frontendowiec
[3:00] dłubał swój task przez dwa, trzy cter
[3:02] dni, więc inne osoby mogły bezpiecznie
[3:05] pracować obok. Dzisiaj ten sam deweloper
[3:07] odpala kilku agentów i w godzinę
[3:09] przemiela dziesiątki plików w obrębie
[3:11] wybranego modułu. Jeśli w tym samym
[3:12] obszarze posadzimy czterech takich
[3:14] deweloperów z naszego klasycznego two
[3:16] pizza teamu, a każdy z nich wypuści
[3:17] swoje stado agentów, to liczba
[3:19] konfliktów i kolizji na mergeu nie
[3:21] rośnie liniowo. Ona po prostu
[3:23] eksploduje.
[3:25] Stąd dzisiaj coraz więcej firm kieruje
[3:27] się w stronę to slice teams, czyli
[3:29] mniejszych, nawet i dwuosobowych
[3:30] zespołów, które wraz z agentami
[3:32] przejmują większy zakres code baseu,
[3:34] niejako redukując obszar potencjalnych
[3:35] konfliktów między zespołami. Zamiast
[3:37] sześciu czy ośmiu osób wchodzących sobie
[3:39] w parady w jednym backlogu dajmy pełny
[3:41] ownership nad modułem jednej lub dwóm
[3:43] osobom wspieranym przez agentów. To
[3:46] możliwe, bo agenci zasypują silosy
[3:48] specjalizacji i łatwo się skalują, a to
[3:50] z kolei może minimalizować wewnętrzne
[3:52] handofy. Kiedyś potrzebowaliśmy
[3:54] fachowców od każdej warstwy, bo praca na
[3:56] niskim poziomie abstrakcji w wielu
[3:57] warstwach była dla pojedynczego
[3:58] dewelopera bardzo wymagająca, a dziś z
[4:01] pomocą agentów jedna lub dwie osoby mogą
[4:03] przekrojowo modyfikować i ulepszać
[4:05] znacznie większe fragmenty projektów niż
[4:07] kiedykolwiek wcześniej. Od tego typu
[4:08] transformacji już na początku 2026 roku
[4:11] pisał D Shipper, CEO firmy Every, a na
[4:13] naszym podwórku wdraża to choćby firma
[4:15] Idron. Ich CTO Maciej Mendrela omówił to
[4:17] w szczegółach na live AI Product Heroes.
[4:20] Oba materiały znajdziecie w opisie tego
[4:22] filmu. W tym momencie wielu z was pewnie
[4:23] pomyśli: "No dobra Przemek, w teorii
[4:25] brzmi to super, ale przecież u nas w
[4:26] firmie są ustalone procesy, sprinty,
[4:29] długa roadmapa i zasady code review". I
[4:31] tu właśnie dochodzimy do niewygodnej
[4:33] prawdy, o której powinno się mówić
[4:35] zdecydowanie częściej.
[4:40] Niewygodna prawda jest taka. Większość
[4:42] tego, co w naszej branży uznajemy dziś
[4:44] za nienaruszalne best practices od
[4:46] rozmiaru zespołów przez sposób
[4:47] planowania sprintów i backlogu aż po to,
[4:49] jak robimy code review powstało w
[4:51] świecie, którego już nie ma. W epoce AI
[4:53] każdy z tych standardów musimy
[4:55] zakwestionować i zaprojektować od zera.
[4:57] Dlatego moja zasada na dzisiaj brzmi:
[5:00] Słuchaj wszystkiego tego, co robią inni.
[5:02] Rób jak najwięcej notatek, a potem
[5:04] wyrzuć to wszystko do kosza i zastanów
[5:05] się, czego tak naprawdę potrzebujesz do
[5:07] efektywnej pracy w twojej firmie, w
[5:08] twoim środowisku. Kopiowanie playbooków
[5:11] od innych po prostu nie działa. Świetnie
[5:13] opowiedział o tym niedawno Josh
[5:14] Woodward, czyli VP Google Labs,
[5:16] odpowiedzialny między innymi za Gemini i
[5:18] AI Studio, w rozmowie u Lenego
[5:20] Rahickiego. Jego główna teza jest
[5:21] bezlitosna. Dzisiaj każda firma i każdy
[5:23] zespół produktowy musi zacząć myśleć i
[5:25] działać jak laboratorium R&D. Dlaczego?
[5:28] Bo możliwości technologii pod spodem
[5:30] zmieniają się co kilka miesięcy. W
[5:32] takich warunkach sztywna, roczna
[5:33] roadmapa i napupowany backlock to
[5:35] przepis na budowanie rzeczy, które w
[5:36] dniu premiery są już po prostu
[5:38] przestarzałe. Z rozmowy z Joshem można
[5:40] wyciągnąć trzy konkretne zasady, które
[5:42] pokazują jak bardzo trzeba dziś wywrócić
[5:44] nasze przyzwyczajenia. Po pierwsze Josh
[5:46] mówi, że innowacji nie da się podgrzać w
[5:48] mikrofali. Przełomowe rozwiązania nie
[5:50] powstają na zaplanowanych w kalendarzu
[5:52] dwudniowych warsztatach z udziałem 15
[5:54] osób raczej w małych jedno alalbo
[5:56] dwuosobowych zafiksowanych na problemie
[5:58] zespołach, czyli naszych two slice
[6:00] teams. Takie zespoły szybko prototypują,
[6:02] są poza głównym procesem i dowożą
[6:05] konkretne efekty. Między innymi tak
[6:06] narodziły się choćby słynne podcast
[6:08] overviews w notebook LM, czego nie było
[6:10] oczywiście w żadnym Excelu i kwartalnym
[6:12] OKRZ. Po drugie, Josh mówi, że krótkie
[6:15] horyzonty czasowe i bezwzględne ubijanie
[6:17] prototypów to jest mustave. Większość
[6:19] wewnętrznych inicjatyw przegrywa przez
[6:20] efekt utopionych kosztów. Firmy boją się
[6:22] zamykać tematy, w które włożyły już
[6:24] czas, nawet pomimo braku mierzalnych
[6:26] korzyści. Działanie jak laboratorium
[6:28] oznacza szybkie, tanie eksperymenty w
[6:30] krótkich oknach czasowych i gotowość do
[6:32] wyrzucenia nawet 90% prób do kosza, żeby
[6:35] podwoić stawkę tam, gdzie pojawia się
[6:37] prawdziwa wartość. Czy to na poziomie
[6:39] zespołu produktu, czy tego jak pracuje
[6:41] pojedynczy deweloper. Trójka mi się
[6:42] szczególnie podoba. To jest taki
[6:44] backlock rzeczy almost possible. Zamiast
[6:46] budować w technologii dzisiaj, czyli
[6:48] wczoraj, zespoły Google Labs prowadzą
[6:50] żywą listę rzeczy, które dzisiaj jeszcze
[6:51] nie działają, ale przy kolejnym
[6:53] przeskoku technologii zapewne staną się
[6:54] możliwe. Kiedy wychodzi nowy model, nie
[6:56] siadają do burzy mózgów, zastanawiając
[6:58] się panowie i dziewczyny, co my tutaj
[7:00] dzisiaj robimy, ale patrzą na to, co na
[7:02] ich liście zostało realnie odblokowane.
[7:05] Takie ekipy projektują w realiach
[7:06] przyszłości, która tak czy tak
[7:08] nadejdzie. Przynajmniej takie są
[7:09] ostatnie trendy. W branży pojawia się
[7:11] coraz więcej przykładów tego, jak takie
[7:13] wewnętrzne laboratoria dostosowują się
[7:14] do rzeczywistości epoki agentów. W
[7:16] praktyce często polega to na łamaniu
[7:18] reguł, które niestety każdy deweloper
[7:20] uznawał za nieśmiertelne. Przykład:
[7:22] Kontrola wersji oraz code review. Dwie
[7:25] firmy, o których zaraz ci opowiem, chcą
[7:26] robić to w radykalnie inny sposób niż
[7:28] dzisiaj.
[7:32] Antropik opublikował niedawno naprawdę
[7:34] ciekawy raport, w którym przeanalizował
[7:36] jak praca z AI zmieniła ich własną
[7:38] organizację. Jak sami piszą jako LAAB AI
[7:40] są jakieś 12 do 18 miesięcy przed resztą
[7:43] rynku jeśli chodzi o zrozumienie wpływu
[7:44] AI na środowisko pracy. A ich
[7:46] transformacja jest pewnego rodzaju
[7:48] wskazówką odnośnie tego, co przyjdzie i
[7:50] do nas. Statystyki Antropica są naprawdę
[7:53] warte uwagi. W sierpniu 2026 roku na
[7:55] każdą godzinę pracy człowieka przypadało
[7:57] 6 godzin pracy agentów. Udział juniorów
[8:00] wśród nowo zatrudnionych na stanowiska
[8:01] techniczne niestety spadł z 27% do 9%.
[8:04] [muzyka] Inżynier Antropica komituje
[8:06] dziś pięć razy więcej kodu niż pół roku
[8:08] temu, a liczba sesji współpracy z AI,
[8:10] które nie dotyczą rozwoju produktu, a
[8:12] infrastruktury dla agentów od jesieni
[8:14] zeszłego roku zwiększyła się z 10 do
[8:16] 22%. A co z tymi świętymi i niezmiennymi
[8:19] regułami pracy w dewelopmencie? Firma
[8:21] zdecydowała się podważyć istnienie
[8:23] czegoś takalnego jak git. Wszystko
[8:25] oczywiście przez agentów. Antropik
[8:27] wskazuje, że liczba mergeżowanych zmian
[8:28] w Monpo wystrzeliła z 2500 do ponad 30
[8:31] 000 dziennie przy 25 milionach
[8:33] checkoutów w CAICD każdego dnia.
[8:35] [muzyka] Jakieś absurdalne wartości.
[8:37] Klasyczny git zaprojektowany pod
[8:39] człowieka pracującego lokalnie i
[8:40] pobierającego pełną historię
[8:41] repozytorium po prostu przestał to
[8:43] wytrzymywać. Aby przygotować się na taką
[8:45] skalę, inżynierowie Antropica w pić
[8:46] miesięcy napisali od zera nowy system
[8:49] kontroli wersji o nazwie SON, który nie
[8:51] wymaga tak dużej liczby pobrań Rep jak
[8:53] git i więcej pracy wykonuje po stronie
[8:55] serwera, a nie u klienta. Comity, merge
[8:57] i rebasey wykonuje serwer, więc nie
[8:59] trzeba niczego puszować. Klient pobiera
[9:01] tylko te pliki, których faktycznie
[9:03] potrzebuje, a nie całe repozytorium, a
[9:05] sama infrastruktura jest 200 razy
[9:06] mniejsza niż przy Gicie. [muzyka]
[9:08] Checkout trwa sekundy zamiast minut.
[9:11] Brzmi nieźle, co? Efekt imponuje i
[9:13] bierze się właśnie z tego wspomnianego
[9:14] podważania świętych reguł dewelopmentu.
[9:16] One po prostu nie wytrzymują próby
[9:18] czasu. Inny przykład to firma Imprint,
[9:20] gdzie dzięki adopcji narzędzi takich jak
[9:22] Cloud Code przeciętny inżynier mergeuje
[9:23] dziś cztery razy więcej pull requestów
[9:25] niż 2 lata temu. Co ciekawe w okresie
[9:27] intensywnej adopcji AI całkowita liczba
[9:29] incydentów spadła u nich o uwaga 42%
[9:32] półrocze do półrocza, a liczba
[9:34] krytycznych incydentów o 78%. [muzyka]
[9:37] Tyle że ten skok produktywności wywołał
[9:39] zupełnie nowy problem. Średni czas
[9:41] oczekiwania na code review spuch z 33 do
[9:43] 77 minut. Ludzkie review stało się tym
[9:46] słynnym bottlenneckiem. Zamiast jednak
[9:48] traktować tradycyjne code review jak
[9:50] świętą krowę, inżynierowie, co opisuje
[9:52] na swoim blogu Will Larson i ich CTO,
[9:54] zadali sobie pytanie rodem z
[9:55] laboratorium. Skoro nasza automatyzacja
[9:57] i testy tak dobrze chronią produkcję, to
[9:59] czy naprawdę każda zmiana w kodzie
[10:01] wymaga blokowania czasu i uwagi drugiego
[10:03] człowieka? Odpowiedź jest w zasadzie
[10:05] oczywista. Imprint [muzyka] wprowadzono
[10:06] proces o nazwie small change. Działa to
[10:09] tak, że pull request dostaje
[10:10] automatycznego apprua bez udziału
[10:12] człowieka, jeśli spełnia twarde
[10:14] wcześniej określone kryteria. Po
[10:16] pierwsze, zmiana poniżej określonego
[10:18] progu wielkości, na przykład 1000 linii
[10:20] i nie dotyka krytycznych aspektów
[10:21] bezpieczeństwa. Po drugie, skrojony na
[10:23] miarę bot AI do code review przeskanował
[10:25] ten kod i nie znalazł żadnych problemów
[10:27] klasy P1 i P2 zgodnie z wewnętrznymi
[10:29] regułami. Po trzecie, testy automatyczne
[10:32] przeszły, a autor zmiany spełnia
[10:33] kryteria zaufania, czyli nie jest
[10:35] kontrybutorem z zewnątrz. Efekt, już na
[10:38] starcie 10% wszystkich PRów zaczęło
[10:39] przechodzić ścieżką automatyczną bez
[10:42] zawracania głowy innym deweloperom,
[10:43] uwalniając ich czas i uwagę na te
[10:45] zmiany, które naprawdę wymagają
[10:47] ludzkiego osądu. Jest duża szansa na to,
[10:48] że z 10 wkrótce zrobi się 20 czy 30%. A
[10:52] to wszystko na skutek pracy, jak
[10:53] wspomniane wielokrotnie, laboratorium
[10:55] nowej generacji. Wracając na sam koniec
[10:57] do pytania z naszego live'a. Jeśli
[10:58] agenci wchodzą sobie w paradę w kodzie,
[11:00] a wy toniecie w konfliktach na mergeu i
[11:01] w kolejkach na cold review, nie
[11:03] szukajcie kolejnej wtyczki do giry ani
[11:05] magicznego skilla do cloud code.
[11:07] Spójrzcie na to, jak pracujecie na co
[11:08] dzień i zadajcie sobie naprawdę trudne
[11:10] pytanie o kształt zespołów, procesów i
[11:12] wykorzystywanych na co dzień narzędzi.
[11:14] Ta krytyczna analiza nie sprawi, że
[11:15] odpowiedzi pojawią się natychmiast, ale
[11:17] na pewno zbliży was do modelu pracy
[11:19] laboratorium R&D. Nie będzie łatwo, bo
[11:21] kwestionowanie tego, co jeszcze wczoraj
[11:23] było normą, jest cholernie trudne. No
[11:25] ale właśnie w takim miejscu jesteśmy po
[11:26] prostu jako branża. Testujcie,
[11:28] eksperymentujcie i budujcie z AI, bo być
[11:30] może już nigdy nie przyjdzie nam
[11:31] doświadczać absolutnych początków czegoś
[11:33] tak wielkiego, co właśnie obserwujemy na
[11:35] żywo. A jeśli się podobało, dajcie
[11:37] lajka, subskrybujcie i do następnego.
