# fusemachines-fullstack-2023

### Fusemachines internship logs and learnings 

> Apr 17 - Day 1 <br />
- Arrived at office premises at 9:10 am.
- Checked in with the receptionist, Ms. Rajani for biometric registration.
- Meeting with the lead of the People & Culture department for the company orientation
- Meeting with Mr. Rojesh Shikhrakar and  Ms. Aakanchya Malla for internship orientation and company tour.
- Meeting with HR to sign NDIAA papers.
- Had personal laptop assessed by the Senior Hardware Technician.
- Got assigned Mr. Lekhnath Oli as my mentor and he suggested to go through the classroom resources.
- Explored the Online Materials of fuseclassroom (Unit 1 - 1.1 and 1.2)
- Checked out at 5:00 pm
<br />

> Apr 18 - Day 2 
#### HTML Basics 
Resource: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML

- Metadata: the <meta> element
Metadata is data that describes data, and HTML has an "official" way of adding metadata to a document — the <meta> element.
For example, we can specify the document's character encoding as:

      ` <meta charset = 'utf-8' /> `

This element specifies the document's character encoding -- the character set that the document is permitted to use. utf-8 is a universal character set that includes pretty much any character from any human language. So, our web page will be able to handle displaying any language. 

If you set your character encoding to ISO-8859-1, for example (the character set for the Latin alphabet), your page rendering may appear all messed up:

![image](https://user-images.githubusercontent.com/51270026/232665983-3292a1af-85a3-43b6-9e7c-3ad74f75bc45.png)

Many <meta> elements include name and content attributes:
**name** specifies the type of meta element it is; what type of information it contains.
**content** specifies the actual meta content.

### Layout

- `nav` contains the main navigation functionality for the page. Secondary links, etc., would not go in the navigation.
- `main` is for content unique to this page. Use <main> only once per page, and put it directly inside <body>. Ideally this shouldn't be nested within other elements.
      
- `article` encloses a block of related content that makes sense on its own without the rest of the page (e.g., a single blog post). 
- `section` is similar to <article>, but it is more for grouping together a single part of the page that constitutes one single piece of functionality 
- `aside` contains content that is not directly related to the main content but can provide additional information indirectly related to it (glossary entries, author biography, related links, etc.).
- `header` represents a group of introductory content. If it is a child of `body` it defines the global header of a webpage, but if it's a child of an - `article` or `section` it defines a specific header for that section (try not to confuse this with titles and headings).
- `footer` represents a group of end content for a page.
