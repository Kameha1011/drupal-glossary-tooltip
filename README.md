# Glossary Tooltip Module

The Glossary Tooltip module for Drupal allows administrators to add terms with titles and descriptions to a glossary. These terms can then be displayed as tooltips when they appear within articles on the website.

## Prerequisites

Before you proceed with the installation, make sure you have the following prerequisites in place:

1. [ddev](https://ddev.readthedocs.io/en/stable/)
2. Drupal 9.
3. Docker.

## Installation

Follow these steps to set up a Drupal 9 site using DDEV, Composer, and Drush:

1. Create a new directory for your Drupal 9 site: `mkdir my-drupal9-site`.
2. Navigate to your Drupal 9 site directory: `cd my-drupal9-site`.
3. Configure your DDEV project for Drupal 9 with a custom document root: `ddev config --project-type=drupal9 --docroot=web --create-docroot`.
4. Start the DDEV development environment: `ddev start`.
5. Create a new Drupal 9 project using Composer: `ddev composer create "drupal/recommended-project:^9"`.
6. Require Drush as a dependency in your Drupal project: `ddev composer require drush/drush`.
7. Install Drupal using Drush: `ddev drush site:install --account-name=admin --account-pass=admin -y`.
8. Generate a one-time login link with Drush: `ddev drush uli`.
9. Launch your Drupal site in the browser: `ddev launch`.

## Installing the Module

To install the Glossary Tooltip module, follow these steps:
                                                                                                                                                                                                                                      
1. Go to **/user/login** and log in with the username `admin` and password `admin`.

![Login](https://lh3.googleusercontent.com/pw/ADCreHfqCV7RYmueSaVdIxCWsZPyf5P2E7_ja118xfUFtkHcXEnzkuoisfK9L_SB4dqrd9GQLKbO1sU_o20rm5_JhyeTMW92vKkvH64wy3oSyjUwEFYCq7P9zM_kQTcEMfNU4Id42ujkovh4ZCIxx-sFZeDI=w1420-h746-s-no-gm?authuser=0)

2. After logging in, navigate to the **Manage** menu and then select **Extend**.

  ![Extend](https://lh3.googleusercontent.com/pw/ADCreHfb2o6hCKUuHcQN6psfikvlRl3WtHl2x4cw85gZkO8RPnGumOvYNKz6PbNAUOqYfNPWmgXCcG1mvR8bLulvG2T7bAr7abQF85Shi6M246x8zdhY-dZC5aey474LipTF1ZF4TOr9CGTzJtpQ_fB853f1=w1424-h738-s-no-gm?authuser=0)

3. In the Extensions menu, search for the "Glossary Tooltip" module, select it, and click the "Install" button.

![Install](https://lh3.googleusercontent.com/pw/ADCreHfbFlNzx1ygggMHmxVyWDOsq_XctlOi1MdC_w7dJgyh0VBD7PXgf1qqGyzSx7TNIRuXC3J3IiL9IQ55y4H-7RfASQ5Ud7ztr5t_GUpDiBeub03laN4qBYBrccMT4ftHHr-smGgZHPu379aBx-HsB6nn=w1421-h740-s-no-gm?authuser=0)

4. Ensure you refresh the Drupal cache by running `ddev drush cr` in your terminal.

Now, the module is installed and ready for testing.

## Main Features

The Glossary Tooltip module offers the following main features:

- Access **/glossary/add** to access the glossary term creation form.

![Add Term](https://lh3.googleusercontent.com/pw/ADCreHcu13sETFffaeN7KlSO1ZH3K_eOyem4NN10VBbVOl6cNvtUpsW0W_ldrbqVGxMKbfbIV9gajpR9Htoivp2PD5ynGhOQcvSikMTmKJlUO58cMfLGbiCFCZDfOyKiSekEJ9bPyTI-fRdaccTFTQONXtkI=w1417-h740-s-no-gm?authuser=0)

- Visit **/glossaryList** to view all the terms you've added to the glossary.

![All Terms](https://lh3.googleusercontent.com/pw/ADCreHfMrjz5p0zO6MWpieMsUe6xN8jEHt6ZF4065756t2ZAhVe1Na57h6j5cbgo7IU28IwjFl7EeVgBvrcUhgZD9SdcOl6TLZxYkwkCjDB1gey4imfbxqDPptUQvnFzLWmCKBlmZnE30z0jCDIj2oqVpxGI=w1428-h741-s-no-gm?authuser=0)

- To see a tooltip, create an article by going to the content tab and selecting "Add Content".

![Add Content](https://lh3.googleusercontent.com/pw/ADCreHc2YiKjoPwZfyPf2gb8tfbTOaTDc8qjrNMc7Fzd_bVJynrY6c_TfkZtvlxPm-RDzFfhE8A1D0U_ast7yHqcAW4W3149mj2b7RvcrHejlRXCFuAKNCouawiH08rykBnYevf48sE8nEqlGUFa-Yac64JF=w1425-h744-s-no-gm?authuser=0)
![Article](https://lh3.googleusercontent.com/pw/ADCreHck6270-Omn4HGVcAeT4CTXycNEhTd1gVnbl-o1jyOQYb-T6XESZuIa6MvYzN3XNt_thykbOisohQzz8jOOysu5xWZYF4tPc4bK6QZ6JJfZ72Kk8hg99ithvt2HSXxb_9F8fAmrM8oWkIIosXNZWbw8=w1438-h548-s-no-gm?authuser=0)
- Be sure to add words from your glossary to the article description.

- Now, when you view your article, you'll notice that the highlighted glossary words display tooltips.

![Tooltip](https://lh3.googleusercontent.com/pw/ADCreHf-OJtvciVhQIcsEk7lrD8iPklX0tuRPKcvVwzvwZcAGKjQFiSdBqbZ9zy6tFA998WUHrYJcxrRFJqoRHzx_jBiJ8K1QetaVEFVB81KTeMHEgFbC6TFVmFZeoAJcENRukbN9ZhajTHT-SjB72fn1gzL=w1192-h548-s-no-gm?authuser=0)

With the Glossary Tooltip module, you can easily manage and display glossary terms as tooltips within your Drupal website.
