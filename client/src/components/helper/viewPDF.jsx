import React from "react";
import PDFFile from "./pdfFile";
import { PDFViewer, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  view: {
    width: "100%",
    height: "100%",
  },
});

export default function ViewPDF ( {type} ) {

  return (
    <div className="history_container">
      <PDFViewer style={styles.view} children={<PDFFile type={"History"}/>} />
    </div>
  )
}