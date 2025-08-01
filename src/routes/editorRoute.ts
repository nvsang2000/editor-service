import {
  convertHtmlHandler,
  convertHTMLSchema,
  convertJsonToPdfMake,
  convertPdfHandler,
  convertPDFSchema,
  convertPdfToImgHandler,
} from "@/controllers/editorController.js";
import { Elysia } from "elysia";

export const editorRouter = new Elysia();

editorRouter.post("/convert/html", convertHtmlHandler, {
  body: convertHTMLSchema,
});

editorRouter.post("/convert/pdf", convertPdfHandler, {
  body: convertPDFSchema,
});

editorRouter.post("/convert/img", convertPdfToImgHandler, {
  body: convertPDFSchema,
});

editorRouter.post("/convert/jsontopdf", convertJsonToPdfMake, {
  body: convertPDFSchema,
});
