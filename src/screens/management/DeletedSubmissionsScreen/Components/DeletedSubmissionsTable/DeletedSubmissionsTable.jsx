import React from "react";

import {
  AlertTriangle,
  CheckCircle2,
  LoaderCircle,
  Trash2,
} from "lucide-react";

import DeletedSubmissionRow from "../DeletedSubmissionRow";

import styles from "./styles";

export default function DeletedSubmissionsTable({
  submissions = [],
  isLoading = false,
  errorMessage = "",
  onRetry,
  onDelete,
}) {
  if (isLoading) {
    return (
      <div
        style={
          styles.stateContainer
        }
      >
        <div
          style={
            styles.loadingIcon
          }
        >
          <LoaderCircle
            size={48}
            strokeWidth={2.1}
          />
        </div>

        <h2
          style={
            styles.stateTitle
          }
        >
          Cargando propuestas
        </h2>

        <p
          style={
            styles.stateText
          }
        >
          Estamos obteniendo las
          propuestas pendientes de
          eliminación definitiva.
        </p>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div
        style={
          styles.stateContainer
        }
      >
        <div
          style={
            styles.errorIcon
          }
        >
          <AlertTriangle
            size={48}
            strokeWidth={2.1}
          />
        </div>

        <h2
          style={
            styles.stateTitle
          }
        >
          No fue posible cargar la
          información
        </h2>

        <p
          style={
            styles.stateText
          }
        >
          {errorMessage}
        </p>

        <button
          type="button"
          style={
            styles.retryButton
          }
          onClick={onRetry}
        >
          Intentar nuevamente
        </button>
      </div>
    );
  }

  if (
    !submissions.length
  ) {
    return (
      <div
        style={
          styles.stateContainer
        }
      >
        <div
          style={
            styles.emptyIcon
          }
        >
          <CheckCircle2
            size={48}
            strokeWidth={2.1}
          />
        </div>

        <h2
          style={
            styles.stateTitle
          }
        >
          No hay propuestas eliminadas
        </h2>

        <p
          style={
            styles.stateText
          }
        >
          No existen propuestas
          pendientes de eliminación
          definitiva.
        </p>
      </div>
    );
  }

  return (
    <section
      style={
        styles.tableWrapper
      }
    >
      <div
        style={
          styles.table
        }
      >
        <div
          style={
            styles.header
          }
        >
          <span>
            PROPUESTA
          </span>

          <span
            style={
              styles.centeredHeader
            }
          >
            TIPO
          </span>

          <span
            style={
              styles.centeredHeader
            }
          >
            ELIMINADA EL
          </span>

          <span>
            USUARIO
          </span>

          <span
            style={
              styles.centeredHeader
            }
          >
            <Trash2
              size={40}
              strokeWidth={2.2}
            />
          </span>
        </div>

        <div
          style={
            styles.body
          }
        >
          {submissions.map(
            (
              submission,
            ) => (
              <DeletedSubmissionRow
                key={
                  submission.id
                }
                submission={
                  submission
                }
                onDelete={
                  onDelete
                }
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}