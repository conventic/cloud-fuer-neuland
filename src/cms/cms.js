import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import MitmachenPagePreview from "./preview-templates/MitmachenPagePreview";
import NeulandPagePreview from "./preview-templates/NeulandPagePreview";
import ProjektePagePreview from "./preview-templates/ProjektePagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("mitmachen", MitmachenPagePreview);
CMS.registerPreviewTemplate("neuland", NeulandPagePreview);
CMS.registerPreviewTemplate("projekte", ProjektePagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
