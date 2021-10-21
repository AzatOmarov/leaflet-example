# WEB 1.0
_FrontEnd project_

<a name="bootstrap"></a>
### Launch [▲](#content)

To start the project locally you must have `npm`, `webpack`, `webpack-dev-server` to be installed globally.
1. First, install `npm` in your os.
2. Clone the project via git.
3. Install all project dependencies by `npm install` and also install `webpack` & `webpack-dev-server` globally by `npm install webpack webpack-dev-server -g`  command.
4. Run your local dev-server:
   npm run start

<a name="structure"></a>
### Project structure[▲](#content)

The project structure consists of several source folders:
* /src - _the folder containing source project files._
* /assets - _this folder containing all static files like img's._

**Source files:**
  * the entry point of the app is **index.js** file (/src/index.js);
  * Components folder contains react-components files which are separated by sub-folders, each one relates to a certain app sections.
  * Containers folder consists of react smart components which are representing the applicaiton pages(sections).
  * Constants folder have different types of constants. 
