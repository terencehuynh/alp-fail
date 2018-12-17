<!--head-->

# The Great Government Foot-Gun #
(An Open Letter to the Australian Government from the Technology Industry.)

[If you want to add your name or recommend alterations to this text, please submit a PR!](https://github.com/terencehuynh/alp-fail/edit/master/README.md).
Alternatively, you can send [a tweet](https://twitter.com/intent/tweet?text=I%20am%20angry%20about%20your%20decision%20to%20pass%20%23aabill%20and%20in%20all%20good%20conscience%2C%20I%20can%20never%20support%20Labor.%20%40BillShortenMP%20%40AustralianLabor%20https%3A%2F%2Falp.fail) to Bill Shorten and the Australian Labor team.

**MEDIA COVERAGE**: [Business Insider](https://www.businessinsider.com.au/you-bunch-of-idiots-australias-tech-industry-savages-labor-for-backing-the-governments-encryption-bill-2018-12), [Saturday Paper](https://www.thesaturdaypaper.com.au/thebriefing/2018/12/10), [TNW](https://thenextweb.com/politics/2018/12/10/australias-horrific-new-encryption-law-likely-to-obliterate-its-tech-scene/), [InnovationAus](https://www.innovationaus.com/2018/12/Encryption-Tech-sector-is-reeling)

<!--
  DEVELOPER NOTE: Anything rendered between the head comment flags will not get
  rendered on the website. This just makes it easier to maintain one place with
  all the names.
-->

---

<!--/head-->

To all elected politicians who voted for the Assistance and Access Bill 2018,
despite the [overwhelming public outcry against the bill][anti-bill-comments]),

You have managed to single-handedly, and seemingly cluelessly, caused one of
the largest existential threats to Australia's technology industry. It appears
that your lack of understanding on matters of technology has resulted in you
[passing legislation][aalaw] that has (within a few days) significantly reduced
faith in the security of software written by Australian companies and
Australian developers.

There is a very serious ethical argument to be considered when discussing this
legislation, on whether it is reasonable for a government to spy on its
citizens to the point where (the digital equivalent of) whispering is no longer
permitted. That is not the point of this letter, because it is clear that this
Parliament is not interested in the human rights of its citizens (or of
non-citizens for that matter). Australia has very few protections for the human
rights of its citizens, [despite a long history of attempts to change
this][aph-rights]. We hope that one day this will change, but there are more
practical problems to consider with this piece of legislation.

For the rest of this letter, we refer to capabilities created under Technical
Capability Notices as "backdoors". We realise that the Government doesn't agree
with the use of this term, because the Government decided to **redefine
technical terms in order to make experts sound incoherent**. The term
"backdoor" in discussions of this legislation was used to refer to the concept
of a vulnerability that nobody except the discoverer is aware of (thus if the
Government is aware of the vulnerability, it tautologically cannot be a
"backdoor"). This is simply an incorrect definition -- the correct term for
this is a "0-day", and the Government intentionally re-defined the term in
order to make reasonable discussion difficult. Similarly, the definition in the
legislation of "systemic weakness" does not match the common meaning of the
word -- if any single end-to-end encryption technology has the ability for its
developers to read messages sent using it, that is a systemic weakness **in
that technology**, but would not be considered as such under this legislation
(since it doesn't affect "a whole class of technology"). This redefinition of
words to confuse your critics is a disgusting Orwellian tactic that we refuse
to take part in.

If this document is too lengthy to read, here is the summary:

* It will not work.
* It destroys trust in Australian developers.
* It destroys trust in Australian software.
* It will systematically weaken encryption in Australia.
* It will weaken the security of users across the world.
* It has no judicial oversight.
* It will increase in scope over time.
* It is unacceptable.

(This letter was drafted by developers, not lawyers. Therefore sections where
we attempt to interpret the legislation should be taken with a grain of salt --
just like attempts by politicians to claim an understanding of technology
should also be taken with a grain of salt. Statements about technology should
be taken as expert opinion by the signatories of this letter.)

[aalaw]: https://www.legislation.gov.au/Details/C2018A00148
[aph-rights]: https://www.aph.gov.au/About_Parliament/Parliamentary_Departments/Parliamentary_Library/pubs/rp/rp9899/99rp20
[anti-bill-comments]: https://www.businessinsider.com.au/australia-spy-chief-is-defending-tola-act-an-unpopular-anti-encryption-law-2018-12

## It will not work. ##

First and foremost, the very concept that this legislation will be able to be
effectively used to read the messages of suspected criminals is laughable. It
is clear that you are not aware of how much of modern software development is
done in the open, or as an international community. The internet allows for
software development that transcends individual countries' jurisdictions.

Many pieces of core infrastructure that power the internet and provide secure
communications are Free and Open Source Software (FOSS). This means that the
source code (the working version of a program that programmers edit to create
programs) is available for all users (this is enforced by copyright licenses
such as the [GNU General Public License][gnu-gpl] -- where the corresponding
source code must be provided to all users). Attempting to put a secret backdoor
in such a program would be futile, since all changes to such software are
public -- and are often reviewed by developers in other countries. Developers
might even be sued for copyright infringement if they do not provide the
corresponding source code for the program (and systems like [reproducible
builds][reproducible-builds] allow users to verify that their program was
produced by a given version of the source code).

Of course, not all software is FOSS. But enough secure FOSS software exists
that a moderately advanced criminal would be more than capable of using it to
send secure messages in a way that this legislation would not be able to assist
law enforcement (and to be clear, more outrageous legislation wouldn't help
either -- it's a fundamental problem with such legislation). Secure
communication applications such as [Signal][signal-app] are readily available,
FOSS, and are developed by people who are outside Australian jurisdiction. So
all a would-be criminal would have to do is use Signal (instead of some other
chat application) and there would be no technical mechanism by which a TCN
would be able to be used. The same applies for [GnuPG][gnupg],
[Matrix.org][matrix.org], and many other secure messaging systems.

Maybe we are over-stating the sophistication of such criminals. But if they are
clever enough to use encryption (which is the justification of this law), then
they're sophisticated enough to change what encrypted messaging application
they use. Most mistakes made when using encrypted messaging are related to
"operational security", which is something that can be detected and
investigated by law enforcement (with the right training) without the need to
create backdoors. Many sophisticated security professionals already can do such
investigations of their own targets -- surely law enforcement is able to do the
same thing (especially considering that law enforcement can attain search
warrants). If they aren't, then they should be educated in how to do such
investigations (many security professionals are contractors -- pay them to
teach you how to investigate technically capable adversaries).

We (obviously) deplore criminals, and wish our law enforcement to have all the
power necessary to catch them. But it is clear that this legislation was
drafted without any technical understanding of how such measures could be
thwarted by those criminals -- there is plenty of encryption software which is
secure that is not developed by Australian companies. The internet allows for
software transmission without physical borders (in a way that is very
fundamentally critical for the world we live in today). Therefore the only net
effect is that the Government has the power to compel the development of
backdoors, but these can be thwarted by using software developed outside
Australia (or by using FOSS).

This should have been enough for the Government to have never considered
passing this legislation. But that's not the only problem with it.

[gnu-gpl]: https://www.gnu.org/licenses/gpl-3.0
[reproducible-builds]: https://reproducible-builds.org/
[signal-app]: https://signal.org/
[gnupg]: https://www.gnupg.org/
[matrix.org]: https://matrix.org/

## It destroys trust in Australian developers. ##

The most insidious aspect of this legislation is that it **will** cause
distrust of Australian developers working for foreign companies, because they
are listed as a "designated communications provider" under &sect;317C(6) of the
Telecommunications Act 1997 (as amended). There has been some discussion over
whether this section could be interpreted as including individual employees of
a company (because they are developing software on behalf of their employer).
But this misses another key issue -- a large amount of FOSS is developed by
people in their free time. Software such as Linux (an operating system that
powers the majority of the internet, and is used by almost every "electronic
service that has one or more end-users in Australia") has had many Australian
contributors that worked on this project on their own time -- some of these
people even contributed while still in high school.

The key fact of the matter is that **even if the Government never uses this
legislation in this manner, [trust in Australian software developers has been
eroded][signal-setback]**. It doesn't matter if the legislation is only used to
secretly add law enforcement devices to a target's Apple accounting (granting
access to new iMessage messages) -- Australian software developers [will be
assumed to be compromised (since assuming otherwise would be a risky assumption
that would threaten their users' security)][1password-bill].

As a result, it is very likely that many projects will no longer be interested
in contributions from (or hiring) Australian developers. As a result, there
will be a corresponding erosion of talent -- the only way to learn software
development is to work on large software projects (and if large software
projects won't accept your work, then you can't learn practical skills). It's
possible that many Australian software developers will emigrate to find work.
This will further atrophy the technology industry in Australia.

If an Australian software developer receives a Technical Capability Notice,
they are now faced with a choice. Either they become a saboteur, and destroy
their reputation as a trustworthy and ethical software developer, or they will
refuse and be fined tens of thousands of dollars under &sect;317ZB (and it's
unclear if the Government could just revoke and then re-issue the Technical
Capability Notice -- meaning that refusing to follow it could result in
bankruptcy). They may quit their job in defiance, but it's not clear whether
this would allow them to avoid the disproportionate fines imposed on them.

Luckily, it is a defence against the civil penalty if compliance would cause
the developer to violate the law of a foreign country under &sect;317ZB(5). In
addition, "designated communications providers" can provide aggregated
statistics about how many notices were received "during a period of at least 6
months" under &sect;317ZF(13). However, admitting that you've received notices
would damage your credibility as a software developer -- so unscrupulous
developers would just lie (reducing the usefulness of such statistics as a
security measure by the public). In addition, we imagine that many developers
would fear being caught on a technicality with this section -- and thus would
prefer to stay silent than risk **5 years imprisonment** due to improperly
disclosing the existence of a Technical Capability Notice.

As software developers, we expect our Government to consider the importance of
the technology industry and to safeguard its future in Australia. However, you
have just betrayed us.

As experts in software development, we expect our Parliament to listen to our
expert opinions rather than [rushing through legislation in order to avoid
criticism from the public][bill-rush]. However, you closed your ears to the
public outcry. Both Labor and the Liberal coalition are in cahoots on this
travesty.

We applaud Adam Bandt MP (Greens), Andrew Wilkie MP (Independent), and the 12
unnamed senators for their courage to vote against this bill. It's a shame that
the rest of Parliament was so spineless to let this through.

[signal-setback]: https://signal.org/blog/setback-in-the-outback/
[1password-bill]: https://blog.1password.com/does-australias-access-and-assistance-law-impact-1password/
[bill-rush]: https://www.buzzfeed.com/joshtaylor/labor-this-encryption-law-is-flawed-also-labor-we-voted-for

## It destroys trust in Australian software. ##

Imagine that you were renovating a house, and had to choose a type of lock for
your front door. Would you choose a lock by a company that has a solid track
record, or a company that is headquartered in a country where the Government
*might* ask the company to provide master keys for all their locks? The answer
should be obvious.

The same simple risk analysis is done when choosing what software to use. There
is such a large array of choices, and Australia is a small player when it comes
to this industry. Why would someone *choose* to use software they know might be
made insecure? Nobody in their right mind would make such a decision.

This legislation appears to contradict the GDPR, making it so that software
written in Australia will likely never be used in Europe due to the fear of
significant fines by the EU because of a GDPR breach. Naively, you might think
that &sect;317ZB(5) would mean that Australian software couldn't be backdoored
in a way that violates the GDPR, however the ability to add backdoors to a
system that processes private information already increases the risk of a
breach that will be punished under the GDPR.

And, as with trust in Australian software developers, trust in Australian
*software* will also be eroded for the same reasons.

## It will systematically weaken encryption in Australia. ##

Despite all of the word-games around "systematic weaknesses" in this
legislation, the primary point that has been entirely ignored by the Government
is that if it is possible for a secure piece of software to be backdoored due
to Government pressure, then it is an insecure piece of software.

Edward Snowden's revelations showed us that the NSA had attempted to subvert
the security of various systems around the world (and succeeded), and since
then many groups of software developers have been working tirelessly to design
systems that are resilient to such attacks and are easy for the public to use.

As a thought-experiment, we can envision a system whereby the company which
develops the software does not have the ability to silently backdoor it. This
could be done by having TPM-resident keys on the device which have to sign all
software that runs on the device (this would require the user to agree to all
software updates). Updates would have to be cryptographically signed by several
developers that are all in different jurisdictions in order for the device to
even attempt to install it. All of the software on the device would be FOSS,
licensed under the [GNU General Public License][gnu-gpl], and would be able to
be [built reproducibly][reproducible-builds].

Such a device could not be *silently* backdoored by the company which developed
it (assuming all the above protections were implemented correctly). In order to
make this device backdoor-able, the company would have to have created a
fundamental weakness in the security of the device to bypass the above
protections. And thus, any Technical Capability Notice would either be found
unenforceable or the company would be forced to create a "systematic weakness"
(in the common meaning of the word).

Similarly, many messaging applications exist today (such as
[Signal][signal-app] and [Matrix.org][matrix.org]) which have encryption that
cannot be broken by the company which develops it -- **without** fundamentally
breaking the encryption for all their users. This is by design, because any
other design would be an insecure system -- and developers are not interested
in developing insecure systems because users wouldn't use them.

And, by systematically weakening encryption for our Government, we have now
created an extreme incentive for those backdoors to be uncovered by malicious
parties. In a world where data breaches are already an existential threat to
many electronic services, creating backdoors is just inviting attackers to
target Australians and Australian software.

It is already difficult enough to create an encryption system that is secure to
attackers (including the Government), and is a skill that takes many years to
perfect. Developing a "secure" system that is backdoored, "but only for the
'good guys' (the Government)", is something that has **never been shown to be
possible**. If it's not possible for computer scientists to come up with such a
system in several **decades** of research, how on Earth can the Government
expect that a software developer being coerced (under threat of fines due to
non-compliance) to develop such a system securely? **They cannot.** And due to
the wording in the law, you would expect that this **fundamental limitation**
would mean that *all* Technical Capability Notices would have to be invalid.
But [ASIO has stated they will use these powers][asio-aabill], and since **we
know it's not technically possible to create such a system securely**, then
clearly such backdoors will have to be insecure.

[asio-aabill]:

## It will weaken the security of users across the world. ##

One of the more concerning (and political) aspects of the legislation is that
it is explicitly designed with the 5-Eyes spying alliance in mind.

&sect;317T(3)(b) states that a "relevant objective" of a Technical Capability
Notice can be to assist the enforcement of criminal laws in a foreign country
(though only for "serious foreign offences"). As was revealed by Edward
Snowden, one of the primary uses of the 5-Eyes spying alliance is [to
circumvent domestic laws, by using the spying apparatus of member states to spy
on their own citizens][5eyes-what-is]. This capability of the legislation was
clearly designed with this purpose in mind -- to allow other 5-Eyes countries
to outsource their illegal spying of their citizens to Australia.

The fact of the matter is that technology does not care what your jurisdiction
is, and thus a backdoor introduced in order to spy on Australians can just as
easily be used to spy on political activists in dictatorships (and it can spy
on ordinary citizens just as easily as it can spy on suspected terrorists).
That which is *legal* is not necessarily *moral*, and some decisions (such as
allowing for the unfettered violation of a person's privacy) should require
moral determinations, not just legal ones.

[5eyes-what-is]: https://www.businessinsider.com/afp-what-is-the-five-eyes-intelligence-alliance-2017-3

## It has no judicial oversight. ##

Unlike warrants or other notices that compel information or obedience, this
legislation has no judicial oversight. There is no review process in front of a
judge about whether the notice is "reasonable and proportionate" nor any of the
other requirements under &sect;317ZAA. Instead, there is an arbitration system
that only requires a *former* judge to preside as an assessor under
&sect;317YA. And while there is a 28-day consultation period under &sect;317W
(which means that Australians mathematically cannot be "kept safe over
Christmas" using this legislation), there is no *judicial* oversight over such
consultation.

This is an affront to the fundamental purpose of our judicial system -- to
ensure there is an impartial check and balance on the powers of law
enforcement. Instead, this legislation has made is so that "designated
communications providers" are compelled to either act, or defy the notice in
order to get judicial oversight through civil court proceedings. This is
completely backwards -- in order for the notice to have effect, it should go
through judicial review *first*, not after-the-fact.

## It will increase in scope over time. ##

Three years ago, the Government passed [a law mandating metadata retention of
Australian communications][metadata-law]. Just as with this law, it was
originally claimed that it would help catch serious criminals. And just like
this law, the set of agencies that could use it was very limited -- [but over
time, "authority creep" has set in][authority-creep]. And just like this
legislation, there was no need for a warrant to gain access to such data.

A recent example of an abuse of the metadata retention legislation is that [a
local Sydney council wanted phone records to fine residents for minor
infringements like littering][smh-littering]. In 2016, [the list of Government
agencies using this warrant-less power to invade people's privacy included
several State racing and gambling authorities][abc-list] -- and likely the list
has grown since then. The Communications Alliance recently stated that [there
are approximately one thousand warrant-less metadata requests **per
day**][1000-per-day].

There is absolutely no reason to believe that this law will not exhibit this
same "authority creep", given that the same assurances were given with previous
laws. Not to mention that once a backdoor has been implemented, it might be
possible for an ordinary warrant (such as the new "computer access warrants"
added in this legislation) to use that backdoor. A backdoor cannot
differentiate between different reasons for access -- it's just a security
weakness that can be exploited by the Government (or anyone who figures out how
the backdoor works) for any purpose.

[metadata-law]: https://www.legislation.gov.au/Details/C2015A00039
[authority-creep]: https://www.abc.net.au/news/2018-10-19/authority-creep-has-more-agencies-accessing-your-metadata/10398348
[smh-littering]: https://www.smh.com.au/business/consumer-affairs/councils-pry-into-residents-metadata-to-chase-down-fines-20181114-p50fxr.html
[abc-list]: https://www.abc.net.au/news/2016-01-18/government-releases-list-of-agencies-applying-to-access-metadata/7095836
[1000-per-day]: https://www.abc.net.au/news/2018-10-19/authority-creep-has-more-agencies-accessing-your-metadata/10398348

## It is unacceptable. ##

All in all, this legislation is completely unacceptable. It will not fulfil its
goals, it will damage international trust of Australian software and software
developers, and gives effectively no checks and balances before a notice can be
given. This legislation *will* result in the atrophy of the Australian
technology industry, because users expect secure software and will not accept
software that could be backdoored by the Australian government.

We plead with our fellow Australians to voice your opinion with your vote in
the coming election (and in future elections, until politicians learn that
their only job is to serve the public) -- neither Labor nor the Liberal
coalition are interested in your privacy or security. They refuse to listen to
experts who tell them the issues with this kind of legislation. There are [many
other parties that have mandates which would have not allowed this legislation
to pass][efa-elections] (and would enact legislation that would protect the
privacy and security of Australians). Here are just a few:

* [The Greens](https://greens.org.au/)
* [Pirate Party Australia](https://pirateparty.org.au/)
* [Science Party Australia](https://www.scienceparty.org.au/)

Don't perpetuate this two-party system. Vote for parties that will protect your
rights. The lesser of two evils is still evil, and the enemy of your enemy is
not your friend.

[efa-elections]: https://www.efa.org.au/our-work/elections/

## Signed ##

* [Aleksa Sarai](https://www.cyphar.com/)

A previous version of this document was signed by the following people. Due to
the significant changes made to this document (mostly involving the addition of
specific concerns and reference to the legislation), we are not sure if they
would still be willing to sign their names. If you wish to be put as a
signatory of this updated version, please let us know.

* [Aaron Boyd](https://github.com/aaronmboyd)
* [Aaron Horler](https://github.com/aghorler)
* [Aaron Job](https://blog.gravypower.net)
* [Aaron Mason](https://github.com/thirdwheel)
* [Aaron Powell](https://www.aaron-powell.com)
* [Aaron Priest](https://twitter.com/Priest/status/1071602162952626176)
* [Adam Corcoran](https://twitter.com/northonm31/status/1072320034175770624)
* [Adam Crampton](https://twitter.com/adam_crampton)
* [Adam Lloyd](https://evolvedprojects.io)
* [Adam Mills](https://twitter.com/MillsAdam/status/1071333240319893504)
* [Adel Smee](https://twitter.com/adelsmee/status/1071794739861696512)
* [Aditya Sen](https://twitter.com/nerdinary/status/1072353614000209921)
* [Adrian Curtis](https://twitter.com/CurtisCamulos/status/1072663527373058048)
* [Aidan Skerry](https://twitter.com/AidanSkerry/status/1070932632622354432)
* [Alan Downie](https://twitter.com/alandownie/status/1070962030176137218)
* [Alan Jones](https://twitter.com/bigyahu/status/1071713782156554241)
* [Alec Clews](https://github.com/alecthegeek)
* [Alejandro V Betancourt](https://twitter.com/satojandro/status/1071460374690463744)
* [Alex Best](https://thenationofalex.com)
* [Alex Eckermann](https://twitter.com/alexeckermann)
* [Alex Ferrara](https://twitter.com/alexcferrara/status/1071686491074551808)
* [Alex Gilleran](https://github.com/alexgilleran)
* [Alex Rapley](https://twitter.com/arapl3y/status/1071952880578453504)
* [Alex Scott](https://github.com/axrs)
* [Alexia McDonald](https://www.alexiamcdonald.com.au)
* [Alfie John](http://www.alfie.wtf)
* [Alistair Martin](https://twitter.com/_ajmartin_/status/1071749376417001474)
* [Alwyn Nixon-Lloyd](https://twitter.com/zarquin/status/1071664014579638272)
* [Amelia Fletcher](https://github.com/salmonmoose)
* [Andrei Charrett](https://twitter.com/nnnbrewery/status/1070972262545743873)
* [Andrej Panjkov](https://twitter.com/AndrejPanjkov/status/1070989538346954752)
* [Andrew Churches](https://twitter.com/yoshymi/status/1072426351850913792)
* [Andrew Crowley](https://twitter.com/ajcrow93/status/1072365173166538753)
* [Andrew Hamilton](https://twitter.com/TassSinclair/status/1071624472774434819)
* [Andrew Mackross](https://twitter.com/mackross/status/1073177992853999616)
* [Andrew McGuire](https://twitter.com/imandings/status/1072320552822484992)
* [Andrew Thaler](https://twitter.com/andrew_thaler/status/1071676040806752256)
* [Andris Trieb](https://github.com/andristrieb)
* [Andy Dent](https://twitter.com/AndyDentPerth/status/1070976479058481154)
* [Andy Kelk](https://www.andykelk.net/)
* [Andy Trigg](https://twitter.com/gigantiqandy/status/1072470644636422144)
* [Angus Beath](https://twitter.com/AngusBeath/status/1071994514657538048)
* [Anh Nguyen](https://twitter.com/nmqanh/status/1073015749118050304)
* [Anna Tito](https://twitter.com/MythicalC/status/1070865646949298177)
* [Anthony Aguis](https://twitter.com/decryption/status/1070963739707375616)
* [Anthony Caldwell](https://twitter.com/CaldwellAnthony/status/1072010145054437377)
* [Anthony Del Ciotto](https://adelciotto.me)
* [Anthony Foster](https://af.id.au)
* [Anthony Manning-Franklin](https://github.com/antman262)
* [Anthony May](https://twitter.com/techydude/status/1072389749523079168)
* [Ant](https://twitter.com/AntB77/status/1071016441997025282)
* [Aria Edmonds](https://twitter.com/ar1aau)
* [Aron Bury](https://github.com/abury)
* [Ash Guy (@theashguy)](https://ashguy.com/)
* [Ashe Connor](https://kivikakk.ee)
* [Asher Wolf](https://twitter.com/Asher_Wolf/status/1070965065254297600)
* [Ashley Towns](https://ashleytowns.id.au)
* [Ayesh Karunaratne](https://ayesh.me)
* [Baz Scott](https://twitter.com/bazscott/status/1071653693735325701)
* [Beau Hankins](https://twitter.com/beaujhankins/status/1073036745086689280)
* [Ben Chester](https://twitter.com/Twistie404)
* [Ben New](https://twitter.com/leftclickben/status/1071574737040490499)
* [Ben Noonan](https://twitter.com/BenNoonan4/status/1072042649568215040)
* [Benjamin Smith](https://www.lix.polytechnique.fr/~smith/)
* [Benji Greig](https://twitter.com/benjigreig/status/1071034217864122370)
* [Bertram Troung](https://twitter.com/bertramtruong/status/1072257698115145729)
* [Beth Skurrie](https://twitter.com/bethesque/status/1071680231721889792)
* [Bill Cruikshank](https://twitter.com/Jestingrabbit/status/1071044564444569600)
* [Bob Woolley](https://twitter.com/boblobsta/status/1071071464810520576)
* [Bradley C Hughes](https://twitter.com/contractcmo/status/1071660320232374272)
* [Brady Clarke](https://www.bradyclarke.com)
* [Brandon Matthews](https://twitter.com/_brandonjm/status/1071956488397058048)
* [Brandon Matthews](https://twitter.com/_brandonjm/status/1071956488397058048)
* [Brendan Roy](https://github.com/bmon)
* [Brendan Taylor](https://tng.wtf)
* [Brendan Weibrecht](https://twitter.com/ZimbiX/status/1072436733998972928)
* [Brendan Zabarauskas](https://twitter.com/brendanzab/status/1071634187965218816)
* [Brett Wakeman](https://twitter.com/brettwakeman/status/1071518902180503552)
* [Brody Maclean](https://twitter.com/BrodyMaclean/status/1072339846499352576)
* [Bruno Mattarollo](https://twitter.com/bmatt/status/1070984761995231232)
* [Byron Jones](https://mozillians.org/u/glob)
* [Cail Young](https:/twitter.com/cailyoung)
* [Cameron Smith](https://twitter.com/CameronSmith93/status/1072040805991251969)
* [Cathal Dinneen](https://twitter.com/cathaldinneen/status/1072981206520627201)
* [Chad Smith](https://twitter.com/Brausmith/status/1070921468278534144)
* [Chad Tolkien](https://twitter.com/c_tolkien/status/1070994544022347776)
* [Chantal McNaught](https://twitter.com/CKMcNaughty/status/1071621338408804352)
* [Charling Li](https://charlingli.github.io)
* [Chhai Thach](https://twitter.com/chhai/status/1072419396436590593)
* [Chris (@nitecoder)](https://twitter.com/nitecoder/status/1071007354940878848)
* [Chris Atkins](https://twitter.com/itscatkins/status/1071135137146912768)
* [Chris Dilger](https://chris.dilger.me)
* [Chris Duell](http://twitter.com/duellsy)
* [Chris Goosen](https://twitter.com/chrisgoosen/status/1071612023153352705)
* [Chris J. Kelly](https://twitter.com/chriskelly7777)
* [Chris Mardell](https://twitter.com/chrismardell/status/1072333159906361345)
* [Chris Rowland](https://twitter.com/ozcjr/status/1072032342745567232)
* [Chris Samuel](https://twitter.com/chris_bloke/status/1071620905661427712)
* [Chris Were](https://twitter.com/tahpot/status/1072293481685561344)
* [Christian Hagelid](https://twitter.com/aussieviking/status/1072715081262059520)
* [Christopher Gough](https://twitter.com/chrisgough2/status/1071680756504649728)
* [Christopher Holmes](https://twitter.com/monsieurduck/status/1072081677629849602)
* [Christopher James](https://twitter.com/Johnny_MNU/status/1071671745608802304)
* [Cin (@skyalin)](https://twitter.com/skyalin/status/1071685841410449408)
* [Claire Paine](https://twitter.com/Clare_Paine/status/1071627232727130113)
* [Claire Taylor](https://twitter.com/claireytee/status/1072017608755429376)
* [Claudia Tu](https://github.com/cloudier)
* [Claudine Chionh](http://www.claudinec.net)
* [Clint Simonsen](https://twitter.com/clintvs/status/1071719272647319552)
* [Cody Konior](https://twitter.com/codykonior/status/1072468078687109120)
* [Cody Miller-Kelly](https://c.zu.io)
* [Colin Panisset](https://twitter.com/nonspecialist/status/1071347121352142848)
* [Corey Ginnivan](https://twitter.com/CoreyGinnivan)
* [Craig Bruce](https://twitter.com/craigrbruce/status/1072614776973479936)
* [Craig Davies](https://twitter.com/crdavies)
* [Craig Handley](https://github.com/cxhandley)
* [Craig O'Shannessy](https://github.com/shanness)
* [Curtis Millar](https://twitter.com/curtismillar)
* [Damian Halloran](https://twitter.com/damianhalloran/status/1071884814272278530)
* [Damien Coxall](https://twitter.com/Official_Damo/status/1071741781790715904)
* [Damion Brown](https://twitter.com/thatsdamion/status/1071165344021004288)
* [Damon Swayn](https://twitter.com/Shruubi)
* [Dan Moore](https://twitter.com/ddmoore/status/1072358736017178625)
* [Daniel Baird](https://twitter.com/danieljbaird/status/1070974654230102016)
* [Daniel Burke](https://twitter.com/shortcutman_/status/1070974916374085633)
* [Daniel Collins](https://dcollins.info/)
* [Daniel Lang](https://twitter.com/mavrickmaster/status/1073049615044210688)
* [Daniel Myles](https://mylesapart.io)
* [Daniel Rea](https://twitter.com/DanRea86/status/1071320633525493760)
* [Daniel Sykes-Turner](https://daniel.st)
* [Daniel Wotton](https://twitter.com/aklys/status/1073168319761379328)
* [Danielle Hickie](https://twitter.com/LadyDanika/status/1072656916206239745)
* [Danny Kalnian](https://github.com/Kallahan23)
* [Darragh Kennedy](https://twitter.com/darraghke/status/1071023173980762112)
* [Darren Cocco](https://blog.segfault.id.au)
* [Darren Rogan](https://twitter.com/darrenrogan/status/1072994219432718337)
* [Dave Finster](https://github.com/davefinster)
* [Dave Slatter](https://twitter.com/daveslatter/status/1071785160088137729)
* [Dave The Happy Singer](https://twitter.com/HappySinger/status/1071253783907262464)
* [David Allen](https://github.com/StaphSynth)
* [David Hemming](https://twitter.com/David_Hemming)
* [David Hillier](https://twitter.com/MobileInfantry/status/1070920364480294912)
* [David Hows](https://github.com/daveh86)
* [David James](https://twitter.com/daviddeejjames/status/1071022934662074368)
* [David Marsh](https://twitter.com/davidmarsh/status/1071894530129940480)
* [David Nedved](http://nedved.com.au/)
* [David Ng](https://github.com/nudge)
* [David Osborne](https://twitter.com/Ramiel01/status/1071028451908308992)
* [David Thorfinn Goh](https://github.com/thorfi)
* [David Vo](https://vovo.id.au)
* [David Wittenveen](https://twitter.com/davidwitteveen/status/1071623861446168576)
* [Dean Tregenza](https://twitter.com/deantregenza/status/1071228391464984576)
* [Delan Azabani](https://www.azabani.com)
* [Donna Spencer](https://twitter.com/maadonna/status/1071630247076872192)
* [Dr Daniel Angus](https://twitter.com/antmandan/status/1070989681863483392)
* [Dr Jehan Kanga](https://twitter.com/jehankanga/status/1071698186387914752)
* [Dr Michael Buskin](https://github.com/mbuskin)
* [Dr Monique Mann](https://twitter.com/DrMoniqueMann/status/1071224224029728768)
* [Dr Paris](https://twitter.com/parisba/status/1071924772118773760)
* [Dr Tom Tilly](https://twitter.com/ThomasTilley14/status/1071363902863138816)
* [Drew Mayo](https://twitter.com/dmeeze/status/1071628036586450946)
* [Dwayne Charrington](https://twitter.com/AbolitionOf/status/1071645842577059840)
* [Dylan Aird](https://github.com/gl3nda85)
* [Eamon Logue](https://twitter.com/Ultimus_Maximus/status/1071031978139340800)
* [Ed Dale](https://twitter.com/Ed_Dale/status/1070977749689368577)
* [Edwin (@edgranau)](https://twitter.com/edgranau/status/1071000025516269568)
* [Effy Elden](https://twitter.com/ineffyble/status/1071621154601758721)
* [Elena Williams](https://github.com/elena)
* [Elijah Glover](https://twitter.com/elijahglover)
* [Eliza Sorensen](https://twitter.com/Zemmiph0bia/status/1071591724441432064)
* [Eric Delaney](https://twitter.com/ericdelaney/status/1071301886777556992)
* [Eric Doriean](https://twitter.com/EricDoriean/status/1071183024740491264)
* [Eric Jiang](https://lorderikir.me)
* [Erik de Castro Lopo](https://github.com/erikd)
* [Erin Beel](https://twitter.com/erinbeel)
* [Ethan Gillespie](https://twitter.com/FuzzyToaster)
* [Eugene Van den Bulke](https://twitter.com/3kwa/status/1071330758936092673)
* [Felix Rauch Valenti](https://twitter.com/ozxilef/status/1071525599007526912)
* [Finn Peacock](https://twitter.com/Solar_Quotes/status/1071277615497961473)
* [Flick Ruby](https://twitter.com/FlickRubicon/status/1070993296225296384)
* [Frank Panetta](https://twitter.com/fattenap/status/1071156209074360320)
* [Frederick Stark](https://twitter.com/coagmano)
* [Garry McGhee](https://twitter.com/gazmcghee/status/1072799870296047616)
* [Geoff Capper](https://github.com/GeoffCapper)
* [Geoffrey Huntley](https://ghuntley.com/live)
* [George Haritonidis](https://twitter.com/georgeharito/status/1070972510265499648)
* [Gerard Hook](https://twitter.com/gcpsoundlight/status/1070953878944772096)
* [Gilberto Olimpio](https://twitter.com/golimpio)
* [Giselle Rosman](https://twitter.com/jazzrozz/status/1071529983552548864)
* [Glen T](https://twitter.com/glent/status/1071626504658767872)
* [Glenn Schmidt](https://github.com/glennschmidt)
* [Grant Orchard](https://twitter.com/grantorchard)
* [Grant Trebbin](https://twitter.com/GPTreb/status/1071654356913537024)
* [Greg Cockburn](https://twitter.com/gergnz/status/1072763468917301249)
* [Guy Aldous](https://lysdexia.digital)
* [Hacik Ozdil](https://hacik.io)
* [Hammy Goonan](https://github.com/hammygoonan)
* [Harrison Shoebridge](https://github.com/paked)
* [Harry Tucker](https://dropsmedia.io)
* [Henry Walshaw](https://twitter.com/om_henners/status/1071627677721710592)
* [Horus Kol](https://twitter.com/horus_kol/status/1071180354218807296)
* [Howard Oettle](https://github.com/hoettle)
* [Hugh Campbell](https://github.com/hughc)
* [Hugo Müller-Downing](https://hugo.md/)
* [Huw Rowlands](https://huwr.net)
* [Ian Knight](http://knightly.xyz)
* [J Kaul](https://twitter.com/j_kaul/status/1070986054037987329)
* [Jackson Bates](https://twitter.com/jacksonbates)
* [Jade Stewart](https://twitter.com/JadedSynic/status/1071531733034516480)
* [James Austin](http://jamesaust.in/)
* [James Boyce](https://github.com/B0yc3y)
* [James Boyden](http://jboy.id.au)
* [James Clark](https://github.com/james-clark-domain)
* [James Collins](https://twitter.com/Quacky_42/status/1072820925651795969)
* [James Dale](https://jamesdale.com.au)
* [James Ducker](https://ozvolvo.org)
* [James Goodridge](https://twitter.com/ljamgood/status/1071978179244384257)
* [James Goodridge](https://twitter.com/ljamgood/status/1071978179244384257)
* [James Hanford](http://projkt.io/)
* [James McPherson](https://twitter.com/jamescmcpherson/status/1071908421954195458)
* [James Pember](https://twitter.com/jamesepember)
* [James Wakeman](https://twitter.com/VideoJamesDev/status/1071637786581561344)
* [Jane Scott](https://twitter.com/JaneScott_/status/1071656253405900801)
* [Jarrod Loidl](https://twitter.com/jloidl/status/1071873806426243072)
* [Jashank Jeremy](https://twitter.com/jashankj/status/1071621350031151105)
* [Jason Brown](https://github.com/stopthatastronaut)
* [Jason Daniels](https://twitter.com/jdan2341/status/1071727238393999360)
* [Jemimah Irvin](https://twitter.com/JemimahIrvin/status/1071855263651491841)
* [Jered Masters](https://jered.cc)
* [Jeremy Bornstein](https://jeremy.org)
* [Jess Archer](https://twitter.com/jessarchercodes/status/1071386747852939269)
* [Jess Telford](https://jes.st/about)
* [Jesse Cameron](https://github.com/Jesse-Cameron/)
* [Jesse Pepper](https://twitter.com/jessepepper/status/1071707123690565632)
* [Jett Jackson](https://jettjacksonmedia.com)
* [Joe Stepowski](https://twitter.com/pompeyjoe80/status/1071682527922872323)
* [John Carney](https://twitter.com/johncarneyau/status/1071969002853826560)
* [John Chrisoulakis](https://twitter.com/john_chr/status/1071624269795221505)
* [John Croucher](https://twitter.com/johncroucher/status/1072009957111779328)
* [John Gray](https://twitter.com/johngray_au/status/1071910736077570049)
* [John Martin](https://twitter.com/JohnMartinIT/status/1071629136525852672)
* [John Meredith](https://twitter.com/psynix/status/1072333371659968512)
* [John Tirsen](https://twitter.com/tirsen/status/1072506755194806274)
* [Jon Roder](https://twitter.com/jon_roder/status/1071657141927239680)
* [Jon Westenberg](https://twitter.com/Jonwestenberg/status/1071647370314625024)
* [Jonathan Lepage](https://github.com/minipif)
* [Jonathan Lowden](https://github.com/jdlowden)
* [Jonathon Taylor](https://github.com/JDTAY)
* [Jordan Miles](https://twitter.com/JMiles42_/status/1072803507017736192)
* [Jordan Overbye](https://jordanoverbye.com)
* [Josh (@MrJosh1989)](https://twitter.com/MrJosh1989/status/1071581342876352512)
* [Josh Knibbs](https://twitter.com/TheNibsy/status/1071635717141319680)
* [josht](https://twitter.com/@joshteperman)
* [Joshua Bourke](https://twitter.com/Buorky/status/1070866643083882496)
* [Joshua Holmes](https://twitter.com/JoshDHolmes)
* [Joshua Ignition](https://twitter.com/IgnitionJD/status/1072025635176902656)
* [Joshua Korner-Godsiff](https://github.com/Kheldar)
* [Joshua Mir](https://twitter.com/Jam10o/status/1071689907444310016)
* [Joshua Richards](https://github.com/JoshuaRichards)
* [Julian Doherty](https://twitter.com/madlep/status/1070510633550938112)
* [Karina Louise](https://twitter.com/nakarielle/status/1071384481951404032)
* [Kartik Gupta](https://twitter.com/_kartikgupta_)
* [Kate Crawford](https://twitter.com/kate_eviva/status/1071237428227190787)
* [Kee Jefferys](https://github.com/KeeJef)
* [Kelly Paxino](https://twitter.com/KPaxino/status/1071640505555931139)
* [Ken Goodwin](https://twitter.com/kengoodwin/status/1071713960276058113)
* [Ken Goodwin](https://twitter.com/kengoodwin/status/1071713960276058113)
* [Kevin Jiah-Chih Liao](https://twitter.com/kevjcl/status/1072584129588461568)
* [Kevin Murray](https://twitter.com/kmaustral/status/1071662027897135104)
* [Kiah Hickson](https://twitter.com/KiahHickson/status/1072054445045833728)
* [Koen Douterloigne, PhD](https://twitter.com/koenbot/status/1072467447545020417)
* [kolchy](https://twitter.com/kolchy/status/1071017625839296513)
* [Lachlan Kingsford](http://www.nerdygentleman.com)
* [Laura Summers](https://twitter.com/summerscope/status/1071622512478445568)
* [Laurie Odgers](https://twitter.com/laurie_odgers/status/1071906161975160832)
* [Lawrence Meckan](https://twitter.com/absalomedia/status/1070950409085247488)
* [Lee Sinclair](https://twitter.com/LeeJSinclair/status/1073200093484871685)
* [Leigh Stillard](https://twitter.com/LeighStillard/status/1070836261886210048)
* [Lewis Freiberg](https://twitter.com/lewisfreiberg)
* [Liam Pomfret](https://twitter.com/LiamPomfret)
* [Liam Zebedee](https://twitter.com/liamzebedee/status/1071567351366197253)
* [Lucas Nelson](https://github.com/lucas-nelson)
* [Lucas Winterbottom](https://lucaswinterbotttom.com)
* [Luke Davis](https://twitter.com/LukeLukus22/status/1070863976517357568)
* [Luke Hamilton](https://twitter.com/lukekhamilton/status/1070983759023882240)
* [Luke Sleeman](https://twitter.com/LukeSleeman/status/1071961964631384064)
* [Luke Tuthill](https://github.com/lyneca)
* [Mannan (@mannanlive)](https://twitter.com/mannanlive/status/1071631422153052160)
* [Marat Levit](https://twitter.com/MaratLevit/status/1072718316400074752)
* [Marc Baptista](https://twitter.com/fingersitchy/status/1072118883635539968)
* [Marco Pivetta](https://ocramius.github.io/)
* [Marcos Nino-Ruiz](https://mninoruiz.org)
* [Marionne van Katwijk](https://twitter.com/venture2ART/status/1073006423871647744)
* [Mark Greenaway](https://twitter.com/certifiedwaif)
* [Mark Hammond](https://twitter.com/skippyhammond/status/1072337333033279489)
* [Mark Perry](https://twitter.com/MarkInPixels/status/1070987491698651137)
* [Mark Perry](https://twitter.com/markperryAU/status/1071640274147799041)
* [Mark Reid](https://twitter.com/foddrick/status/1071126503687999488)
* [Mark Ruberto](https://twitter.com/ruberto/status/1071690519850319872)
* [Martin Feckie](https://mfeckie.github.io/)
* [Martin Hyland](https://gitlab.com/martinhyland)
* [Martin Stannard](https://twitter.com/_martinS_/status/1071901606419951616)
* [Matt (@MJTnetau)](https://twitter.com/MJTnetau/status/1071030887129636865)
* [Matt Cramp](https://twitter.com/merusworks/status/1070979902034259968)
* [Matt Dale](https://twitter.com/iseerooAU/status/1072356430982901761)
* [Matt Giuca](https://twitter.com/mgiuca/status/1071891845154631680)
* [Matt Godden](https://twitter.com/metaning/status/1071624908944228352)
* [Matt Hrkac](https://twitter.com/MattHrkac/status/1071691528697860096)
* [Matt Murphy](https://twitter.com/maltmurphy/status/1071274434881703942)
* [Matt Smith](https://twitter.com/ktingvoar/status/1071706603089362944)
* [Matt Traynor](https://twitter.com/_mtau/status/1070886980597084160)
* [Matt Trimarchi](https://twitter.com/mattems/status/1070982527341318144)
* [Matthew (@marblewraith)](https://twitter.com/marblewraith/status/1071656146656616448)
* [Matthew Cengia](https://blog.mattcen.com)
* [Matthew Clark](https://twitter.com/MrMattyBoom/status/1071929737642074112)
* [Matthew King](https://github.com/matthewking)
* [Matthew Rath](https://twitter.com/marblewraith/status/1071656146656616448)
* [Matthew Redmond](https://mattr.github.io)
* [Matthew Riddle](https://twitter.com/matthewriddle/status/1070977732454965248)
* [Matthew Schinckel](http://schinckel.net)
* [Matthew Taylor](https://twitter.com/MtyTaylor/status/1072082238731313152)
* [Michael Barnett](https://twitter.com/shuttah627)
* [Michael Dimoudis](https://twitter.com/dimoss/status/1071395069771431937)
* [Michael Dyrynda](https://twitter.com/michaeldyrynda)
* [Michael Ensly](http://mens.ly)
* [Michael Hossen](https://twitter.com/mhossen/status/1070902172529741824)
* [Michael Mulhern](https://twitter.com/the_jongleur/status/1070990859108110336)
* [Michael Shang](https://github.com/mxs)
* [Mick Semb Wever](https://about.me/wever)
* [Mike Buttery](https://twitter.com/mikebuttery/status/1072707560610848768)
* [Mike Connory](https://twitter.com/MikeConnory/status/1072058961677901825)
* [Mike Ebinum](https://twitter.com/mikeebinum)
* [Mike Kreuzer](https://mikekreuzer.com)
* [Mike Lynch](https://mikelynch.org)
* [Mike Sampson](https://twitter.com/mfsampson/status/1070986332615278592)
* [Miles Burke](https://twitter.com/milesb/status/1070993561804369920)
* [Miranda Raffaele](https://digitalpanda.com.au)
* [Mischa Colley](https://twitter.com/mischacolley/status/1072065304597942272)
* [Mitch Ellis](https://twitter.com/mellisdesigns/status/1073013581824778240)
* [Mohannad T. Hussain](https://twitter.com/Mhnd_AbuJasmin/status/1070972533933957120)
* [Myles Condon](https://twitter.com/myles_condon/status/1071737340496879617)
* [Nat Kershaw](https://twitter.com/worddecree)
* [Nate Cochrane](https://twitter.com/natecochrane/status/1070966496229113857)
* [Nathan Dench](https://github.com/ndench)
* [Nathan Dench](https://twitter.com/nathandench/status/1071889377658191873)
* [Nathan Hardy](https://nhardy.id.au/)
* [Nathan Malishev](https://github.com/nathanmalishev)
* [Nathan Wilson](https://twitter.com/NathanW1014/status/1071685640419332097)
* [Ned Martin](https://twitter.com/nedmartin/status/1071975312747941888)
* [Neil Forbes-Richardson](https://github.com/neilogd)
* [Nick Conolly](https://gamu.io)
* [Nick Gray](https://twitter.com/nbg_dev/status/1071931023816982529)
* [Nick Lothian](https://twitter.com/nlothian/status/1072295795616071680)
* [Nico Haemhouts](https://twitter.com/nico_haemhouts/status/1071549187995521030)
* [Nicole Jensen](https://twitter.com/nicolejensen/status/1071620760190382080)
* [Olivier Mehani](https://olivier.mehani.name)
* [Owen Andrews](https://twitter.com/owenandrews_)
* [Pascal Optiz](https://twitter.com/pascalopitz/status/1071988395713355776)
* [Patrick Ivers](https://pjivers.com)
* [Patrick Mifsud](https://patrickmfsd.github.io)
* [Patrick Murray](https://patmurray.co)
* [Patrick Nappa](https://pat.sh/)
* [Patrick O'Meara](https://twitter.com/patomeara/status/1069912309647126528)
* [Patrick Paevere](https://twitter.com/patriiiicko)
* [Patrick Thompson](https://twitter.com/PT_here/status/1071626579728420865)
* [Paul Armistead](https://twitter.com/PaulArmistead/status/1071557128920264704)
* [Paul Fox](https://twitter.com/paulie_fox/status/1071665964813443072)
* [Paul Gear](https://twitter.com/paulgear1/status/1071235009346920448)
* [Paul Haesler](http://github.com/SpacemanPaul)
* [Paul Warren](https://twitter.com/pawarren/status/1071265023840768001)
* [Peta Thames](https://twitter.com/petathames/status/1072337639670538240)
* [Peter "StormCroe" Argent](https://twitter.com/TempestuousCroe/status/1071015045692149760)
* [Peter Argent](https://www.peterargent.com)
* [Peter Aylett](https://twitter.com/PeterAylett/status/1073163731675209728)
* [Peter Kumaschow](https://twitter.com/pkumaschow)
* [Peter McNeil](https://twitter.com/pmcneil/status/1071628663609651200)
* [Phil Nickl](https://philnickl.com)
* [Phillip Sanderson](https://github.com/eaglestorm)
* [Phillip Smith](https://twitter.com/fukawi2/status/1071200289301028864)
* [Prabu Weerasinghe](https://twitter.com/prabz/status/1072867431444443136)
* [Rafael Gonzalez](https://github.com/rafaelgonzalez)
* [Ray Hilton](https://twitter.com/rayh/status/1071973452263768064)
* [Rebecca Le](http://www.sevenseacat.net)
* [Reji Eapen](https://twitter.com/rejieapen/status/1071771973980577794)
* [Renlord Yang](https://renlord.com)
* [Rhys Lloyd](https://github.com/justrhysism)
* [Ric Hayman](https://achurchassociates.com)
* [Richard Bean](https://twitter.com/elahieh/status/1070967394082799616)
* [Richard Burleigh](https://richardburleigh.com.au)
* [Richard Cullen](https://twitter.com/TrickiDicki/status/1073361528085143552)
* [Richard Jones](https://mechanicalcat.net/richard)
* [Rick C](https://twitter.com/metao/status/1071063913276424194)
* [Rithesh J](https://github.com/AgentAileron)
* [Rob Jacoby](https://twitter.com/robjacoby/status/1071638243135827969)
* [Rob Sanders](https://twitter.com/AusRob/status/1070963199657181184)
* [Robert Hudson](https://twitter.com/manaz_d/status/1070999755134619648)
* [Robert Koch](https://me.kochie.io)
* [Robert Moore](https://twitter.com/robdmoore/status/1071568198242197504)
* [Robert O'Keefe](https://twitter.com/Frankenleigen/status/1071533253419364352)
* [Robert Sanchez](https://twitter.com/robertmsanchez/status/1072847200487526401)
* [Robin Doherty](https://twitter.com/rdoh/status/1071628793457008640)
* [Roger Close](https://twitter.com/djrogerramjet/status/1071633690982117376)
* [Rohan Lee Toms](https://twitter.com/RohanLeeToms1/status/1072015146090848256)
* [rootkitty](https://twitter.com/rootkit_ty/status/1071640023122894848)
* [Rory Hart](https://twitter.com/falican/status/1071666346746830848)
* [Rose Katic](https://twitter.com/RoseKatic/status/1071625511099523073)
* [Ruben Schade](https://rubenerd.com/)
* [Ryan Bigg](https://ryanbigg.com)
* [Ryan Chausse](http://ryanchausse.com)
* [Ryan Dowling](https://twitter.com/ryanallmighty1/status/1071945787494387713)
* [Ryan Worthington](https://github.com/RobotnikRyan)
* [Sae Ra Germaine](https://twitter.com/ms_mary_mac/status/1071531807038787584)
* [Safwan Kamarrudin](https://twitter.com/SafwanDotErl/status/1070991233462427648)
* [Sam Bailey](https://twitter.com/that_sam_guy/status/1071348043612545024)
* [Sam Spilsbury](https://github.com/smspillaz)
* [Sam Zawsum](https://twitter.com/SamAntixMusiQ/status/1071704679371948033)
* [Samuel Leslie](https://github.com/ralish)
* [Sean Brady](https://twitter.com/sbrady12345/status/1071689817501532160)
* [Sean Hugo](https://twitter.com/MacabreHeart/status/1071627793371254784)
* [Sean McNamara](https://twitter.com/s_mcnamara/status/1071647065581617152)
* [Sean Nicoara](https://twitter.com/snicoara/status/1071965584550649856)
* [Senator Jordon Steele-John](https://twitter.com/Jordonsteele/status/1071930560279306241)
* [Shane Hall](https://twitter.com/shed_one/status/1071685998784917504)
* [Shane MacPhillamy](https://twitter.com/coaic/status/1071153063715459072)
* [Shannon Oram](https://github.com/s-oram)
* [Shaun Branden](https://twitter.com/parsect)
* [Shaun Daws](https://github.com/shaundaws)
* [Shaun Ewing](https://shaun.net)
* [Shaun Ruigrok](https://twitter.com/Shaun_R/status/1070988851932360705)
* [Shawn O'Neill](https://twitter.com/ShawnOnTheNet/status/1071112276810199040)
* [Shayne O'Neill](http://github.com/shayneoneill)
* [Simon Abela](https://twitter.com/simon2012/status/1071702480361205761)
* [Simon Buckley](https://twitter.com/SimonXCIV/status/1071722067697881088)
* [Simon Cocking](https://twitter.com/mowog/status/1071211738345857025)
* [Simon Dewar](https://twitter.com/herodfel/status/1071684321583423488)
* [Simon Dwyer](https://github.com/SimmyD)
* [Simon Welsh](https://twitter.com/simon_w)
* [sortius](https://twitter.com/sortius/status/1070984053057216513)
* [Stephan Dann](https://twitter.com/stephendann/status/1071627281984966656)
* [Stephen Eaton](https://twitter.com/madeinoz/status/1072316592791449600)
* [Stephen Koo](https://twitter.com/stephenkoo/status/1073002683261378561)
* [Stephen Merity](http://smerity.com/)
* [Stephen Muss](https://github.com/stephenmuss)
* [Stephen Reay](https://twitter.com/bobblestmonkey/status/1073126932609261573)
* [Stephen Rees-Carter](https://stephenreescarter.net)
* [Steve Dalton](https://twitter.com/spidie)
* [Steve Forbes](https://twitter.com/forbze/status/1071097533487874048)
* [Steven Allen](https://stevena.me)
* [Steven Lopez (@slopezAU)](https://nswindependent.com.au/)
* [Stewart Smith (@stewartsmith)](https://www.flamingspork.com/)
* [Stewart Wilson](https://twitter.com/swilsonau)
* [Stuart Allan Rutherford](https://twitter.com/WorstThereIs/status/1071627548553932800)
* [Stuart Jones](https://twitter.com/horus_kol/status/1071180354218807296)
* [Stuart Low](https://twitter.com/stuart_low/status/1072332234659631104)
* [Stuart Waite](https://twitter.com/stuartwaite/status/1071743116892237826)
* [Studio 72 Web Design](https://twitter.com/Studio72AU/status/1072255602607308800)
* [Tanner Bennett](https://github.com/NSExceptional)
* [Taryn Ewens](https://twitter.com/tarynewens/status/1071321149672370176)
* [Tate Bulic](https://twitter.com/taytemss/status/1070973665456472064)
* [Terence Huynh](https://twitter.com/terencehuynh)
* [Terry Sweetser](https://about.me/terry.sweetser)
* [Tess Elation](https://twitter.com/tessiselated/status/1071908218593366016)
* [Thauan Zatta](https://twitter.com/thauanz/status/1072336308335509504)
* [Thomas Lock](https://twitter.com/ThomasLockMusic/status/1072830931965239296)
* [Thomas Sesselmann](https://github.com/TomSesselmann)
* [Tim Butler](https://twitter.com/timbutler)
* [Tim Cuthbertson](https://github.com/timbertson)
* [Tim McGilchrist](https://twitter.com/lambda_foo/status/1071903124414062592)
* [Tim Oliver](http://timoliver.com.au)
* [Tim Osborn](https://twitter.com/memelab/status/1072094838789566465)
* [Tim Serong](https://ourobengr.com)
* [Tobias Cohen](https://tobico.net)
* [Todd Norbury](https://twitter.com/norbs/status/1071261285591875584)
* [Tom Crinnegan](https://twitter.com/tomcrin/status/1071669600230621184)
* [Tom Giuretis](https://twitter.com/TomGiuretis/status/1071635474874155008)
* [Tom Goodall](https://twitter.com/TommehG/status/1071975091422941184)
* [Tom Lynch](https://twitter.com/trmarker)
* [Tom Newby](https://twitter.com/tomnewbyau)
* [Tom Sullivan](https://github.com/msbit)
* [Tony Brown](https://twitter.com/triangulum_au/status/1071663835709235200)
* [Tony Tamplin](https://github.com/tonytamps)
* [Trent Stollery](https://github.com/trentstollery)
* [Trevor Rose](https://twitter.com/galacticprez/status/1071612883111268353)
* [Tristan Gauci](https://twitter.com/MaegaCEO/status/1071463542279168000)
* [Vatsalya Goel](https://vatsalyagoel.com/)
* [Venetta Lee](https://twitter.com/Lady_Angua/status/1071582153211670529)
* [Vix Volante](https://twitter.com/VixVolante/status/1071656964730642432)
* [Wayne Sebbens](https://twitter.com/Sebbs128/status/1072417366049472513)
* [Will Charles](https://twitter.com/wcharles/status/1072290859490525184)
* [Will Dady](https://twitter.com/WillDady/status/1072352822530842625)
* [Will Gittoes](https://github.com/md5wasp)
* [Will Hackett](https://www.willhackett.com)
* [William Holt](https://github.com/halbrd)
* [William Lumley](https://twitter.com/wlumley95/status/1071996379218665473)
* [Xuebing Li](https://xuebing.io)
* [Yasin Masukor](https://twitter.com/WhyMasukor/status/1071940739481899008)
* [Yomilk (@yomilk)](https://twitter.com/Yomilk/status/1071661561788264448)
* [Zachary Simone](https://zachsim.one/)
* [Zara Dimitria](https://twitter.com/zaradimitria/status/1072286942581026816)
* [Zoe Rose](https://twitter.com/z_rose/status/1071625949916028930)

... [and many more.](https://twitter.com/search?f=tweets&q=%23aabill%20alp.fail)
