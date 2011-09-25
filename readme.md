##MYCLIPBOARDISMINE

Instead of a pointless rant on why websites shouldn't inject text into my clipboard
when i copy and paste (at least not without some sort of notification).

Heres a chrome extension which seems to disable the most popular clipboard hijacker (Tynt)

To install either load this directory as an unpacked extension via Tools -> Extensions -> load unpacked extension

Or load the attached .crx signed by me.

Theres nothing fancy going on (all the logic is in contentscript.js) and we're basically setting the Tynt object to an empty array if it exists
