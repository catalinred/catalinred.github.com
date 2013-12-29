---
author: Red
comments: true
date: 2012-12-17 06:00:11+00:00
layout: post
slug: tips-and-tricks-on-sublime-text-2-your-favorite-code-editor
title: Tips on Sublime Text 2 - your favorite code editor
wordpress_id: 5573
categories:
- CSS
- HTML5
- jQuery
- Miscellaneous
tags:
- CSS
- HTML
- web tools
---

Unless you've lived under a rock lately, I'm sure you've heard of [Sublime Text 2](http://www.sublimetext.com/2) and most likely that's your favorite code editor. 

In the past I used some other [code editors](http://www.red-team-design.com/free-text-editors-tools-for-developers) like Komodo Edit or Aptana Studio, but now I use Sublime Text 2 on a daily basis and I'm pretty happy with it. It's lightweight, easy to use and has a modern UI look. But by far, the best feature is the ability to extend its functionality with plugins, a.k.a packages.

![Sublime Text 2](http://www.red-team-design.com/wp-content/uploads/2012/12/sublime-text-2.png)

<!-- more -->



## Top things people love about Sublime






	
  * The Goto Anything ability (`Ctrl+P`) is a time saver as you can quickly jump between files. Also, the Command Pallete (`Ctrl+Shift+P`) is very useful when trying to switch file's syntax for example or search/change preferences.

	
  * I do enjoy the Distraction Free Mode feature (`Shift+F11`) whenever I want to focus even more on writing code.

	
  * Sublime Text 2 it's extremely customizable. That's right, you can customize almost anything like menus, snippets and completions.

	
  * The community is awesome, there are a lot of free plugins in the wild, ready to fit your needs.

	
  * Great user interface with some great predefined color schemes. I am a big fan of the _Monokai_ default.





## Perfect Workflow in Sublime Text 2


If you want to dive into the world of Sublime Text 2, then you don't want to miss this awesome free [video course](https://tutsplus.com/course/improve-workflow-in-sublime-text-2/) by [Jeffrey Way](https://twitter.com/jeffrey_way). He'll convince you that Sublime Text 2 is merely the best code editor available today. Warning, he's quite convincing! :)



## Package Control


First of all, you should install Sublime [Package Control](http://wbond.net/sublime_packages/package_control). It helps discovering, installing, updating and removing packages for Sublime Text 2. Alternatively, you'll have to manually install the plugins you need.

![Sublime packages](http://www.red-team-design.com/wp-content/uploads/2012/12/sublime-packages.png)_List of installed packages._

Here are some packages I'm currently using:



	
  * [ColorPicker](https://github.com/weslly/ColorPicker) - A color picker right in your Sublime editor.

	
  * [SublimeLinter](https://github.com/SublimeLinter/SublimeLinter) - Contains linting tools for various coding languages.

	
  * [Prefixr](http://wbond.net/sublime_packages/prefixr) - No need to worry about browsers prefixing anymore.

	
  * [LiveReload](https://github.com/dz0ny/LiveReload-sublimetext2) - Spare your F5 key a little more.






## Emmet & Hayaku


[Emmet](http://docs.emmet.io/) (previously known as Zen Coding) is a web-developer’s toolkit that can greatly improve your HTML & CSS workflow. It's available for multiple code editors, including Sublime Text 2 as well. Also, as mentioned in their docs, Emmet is developed and optimised for web-developers whose workflow depends on HTML/XML and CSS, but can be used with programming languages too.

If you are a Sublime Text 2 addicted and a fan of abbreviations then you may give [Hayaku](http://hayakubundle.com) a try too. With Hayaku you don't need to remember abbreviations and use cheatsheets. You can write just any way you like the abbreviations to be and Hayaku would try it's best to guess what you need.



## Custom ANT targets


Speaking of customization, I frequently use the ANT build system and running custom build targets directly from Sublime Text 2 is super useful.

Using the Command Pallete (`Ctrl+Shift+P`) you can easily run an ANT target just by typing its name.
![Custom ANT targets](http://www.red-team-design.com/wp-content/uploads/2012/12/custom-ant-targets.png)

Here's an example that contains two ANT build targets defined: 

    
    
    {
        "selector": "source.java",
        "working_dir": "${project_path}",
        "cmd": ["ant.bat"],
    
        "variants": [
    
            { "cmd": ["ant.bat", "clean"],
              "name": "Clean"
            },
    
            { "cmd": ["ant.bat", "deploy-text"],
              "name": "deployText"
            }
        ]
    }
    





## Conclusion



Don't forget to browse the whole list of published packages. You'll always find something useful there. My latest discovered package that I want to give it a try soon is [Sublime SVN](http://wbond.net/sublime_packages/svn). Also, if you want an even cooler icon for Sublime, you have some options. Check [this resource](https://github.com/dmatarazzo/Sublime-Text-2-Icon) out!

Good luck with coding! 
