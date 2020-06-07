import React from "react";

export default function ExternalLink({ title = "", to = "", children = null }) {
  return <a href={to} target="_blank">{title || children}</a>;
}
